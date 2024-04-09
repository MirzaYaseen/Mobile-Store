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
import { Tooltip, Button } from 'react-native-elements';

const ITEMS_PER_PAGE = 10;

const DeviceList = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [devices, setDevices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const fetchDevices = useCallback(async () => {
    try {
      const deviceListViewModel = new DeviceListViewModel();
      const fetchedDevices = await deviceListViewModel.fetchDevices();
      setDevices(fetchedDevices);

      const totalPagesCount = Math.ceil(fetchedDevices.length / ITEMS_PER_PAGE);
      setTotalPages(totalPagesCount);
    } catch (error) {
      console.error('Error setting devices:', error);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchDevices();
    }
  }, [isFocused, fetchDevices]);

  const getDevicesForPage = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return devices.slice(startIndex, endIndex);
  };
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
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={getDevicesForPage()}
        renderItem={renderItem}
        keyExtractor={item => item.deviceId.toString()}
      />
      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 1}>
          <Text
            style={[styles.pageButton, currentPage === 1 && styles.disabled]}>
            Previous
          </Text>
        </TouchableOpacity>
        <Text style={styles.pageNumber}>
          {currentPage} / {totalPages}
        </Text>
        <TouchableOpacity
          onPress={handleNextPage}
          disabled={currentPage === totalPages}>
          <Text
            style={[
              styles.pageButton,
              currentPage === totalPages && styles.disabled,
            ]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F9FBFF',
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor:'#F9FBFF'
  },
  pageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ACD7FF',
    marginHorizontal: 5,
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  disabled: {
    backgroundColor: '#eee',
  },
});

export default DeviceList;