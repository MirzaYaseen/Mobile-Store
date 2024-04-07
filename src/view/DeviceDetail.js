import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DeviceDetails = ({route}) => {
  const { device} = route.params;
  const navigation = useNavigation();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    });
    return unsubscribe;
  }, [navigation]);


  const handleDelete = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this device?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteDevice(),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const deleteDevice = () => {
    fetch(`http://115.186.185.238:5401/api/device/?deviceId=${device.deviceId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setDevices(devices.filter(d => d.deviceId !== device.deviceId));
          navigation.goBack();
        } else {
          Alert.alert('Error', 'Failed to delete device');
        }
      })
      .catch(error => {
        console.error('Error deleting device:', error);
        Alert.alert('Error', 'An error occurred while deleting the device');
      });
  };

  const handleEdit = () => {
    navigation.navigate('EditDevice', { device });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={{uri: device.deviceImg}} style={styles.img} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.keywordRow}>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              MODEL: {device.deviceModel.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.keywordRow}>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              CATEGORY: {device.deviceCategoryName.toUpperCase()}
            </Text>
          </View>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              COMPANY: {device.deviceCompanyName.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.keywordRow}>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              COLOR: {device.color.toUpperCase()}
            </Text>
          </View>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>PRICE: ${device.price}</Text>
          </View>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              Memory: {device.memory.toUpperCase()}
            </Text>
            <Text style={styles.text}></Text>
          </View>
        </View>

        <View style={styles.keywordRow}>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              STATUS: PTA-{device.deviceStatusName.toUpperCase()}
            </Text>
            <Text style={styles.text}></Text>
          </View>
          <View style={styles.keywordBox}>
            <Text style={styles.keyword}>
              Memory: {device.memory.toUpperCase()}
            </Text>
            <Text style={styles.text}></Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={handleEdit}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../assets/pen.png')}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Edit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={handleDelete}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../assets/delete.png')}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Delete</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  keywordRow: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  keywordBox: {
    flexDirection: 'row',
    alignItems: 'space-evenly',
    marginRight: 10,
  },
  keyword: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    color:'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  img: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
  imgView: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#ACD7FF',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default DeviceDetails;
