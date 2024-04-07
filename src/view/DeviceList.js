import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import DeviceListViewModel from '../viewModel/DeviceListViewModel';
import Swipeable from 'react-native-swipeable';

const DeviceList = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [devices, setDevices] = useState([]);

  const fetchDevices = useCallback(async () => {
    try {
      const deviceListViewModel = new DeviceListViewModel();
      const fetchedDevices = await deviceListViewModel.fetchDevices();
      setDevices(fetchedDevices);
    } catch (error) {
      console.error('Error setting devices:', error);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchDevices();
    }
  }, [isFocused, fetchDevices]);

  const renderItem = ({item}) => (
    <SafeAreaView>
      <Swipeable rightButtons={deleteButton(item)}>
        <TouchableOpacity onPress={() => navigateToDeviceDetails(item)}>
          <View style={styles.container}>
            <Image source={{uri: item.deviceImg}} style={styles.img} />
            <View style={styles.textView}>
              <Text style={styles.text}>{item.deviceModel}</Text>
              <Text style={styles.text}>
                {item.deviceCategoryName} - {item.deviceCompanyName} -{' '}
                {item.color}
              </Text>
              <Text style={styles.text}>${item.price}</Text>
              <Text style={styles.text}>{item.deviceStatusName}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </SafeAreaView>
  );

  const navigateToDeviceDetails = device => {
    navigation.navigate('DeviceDetails', {device});
  };

  const deleteButton = item => [
    <TouchableOpacity
      onPress={() => onDelete(item)}
      style={styles.deleteButton}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>,
  ];

  const onDelete = item => {
    fetch(`http://115.186.185.238:5401/api/device?deviceId=${item.deviceId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setDevices(prevDevices =>
            prevDevices.filter(d => d.deviceId !== item.deviceId),
          );
        } else {
          console.error('Error deleting device');
        }
      })
      .catch(error => console.error('Delete request error:', error));
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={devices}
      renderItem={renderItem}
      keyExtractor={item => item.deviceId.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    height: 100,
    backgroundColor: 'white',
  },
  editDelete: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    justifyContent: 'flex-end',
    padding: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 100,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textView: {
    justifyContent: 'center',
    height: 100,
  },
  text: {
    color: 'black',
    fontSize: 15,
  },

  leftButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  rightButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
});

export default DeviceList;
