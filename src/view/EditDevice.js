import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EditDevice = ({route}) => {
  const {device} = route.params;
  const navigation = useNavigation();
  const [editedDevice, setEditedDevice] = useState(device);

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://115.186.185.238:5401/api/device?plan=${device.deviceId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedDevice),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to update device details');
      }

      Alert.alert('Success', 'Device details updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating device:', error);
      Alert.alert('Error', 'An error occurred while updating the device');
    }
  };

  const handleChange = (key, value) => {
    setEditedDevice(prevDevice => ({
      ...prevDevice,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={editedDevice.deviceModel}
        onChangeText={text => handleChange('deviceModel', text)}
        placeholder="Device Model"
      />
      <TextInput
        style={styles.input}
        value={editedDevice.deviceCategoryName}
        onChangeText={text => handleChange('deviceCategoryName', text)}
        placeholder="Device Category Name"
      />
      <TextInput
        style={styles.input}
        value={editedDevice.deviceCompanyName}
        onChangeText={text => handleChange('deviceCompanyName', text)}
        placeholder="Device Company Name"
      />
      <TextInput
        style={styles.input}
        value={editedDevice.color}
        onChangeText={text => handleChange('color', text)}
        placeholder="Device Color"
      />
      <TextInput
        style={styles.input}
        value={editedDevice.price.toString()}
        onChangeText={text => handleChange('price', text)}
        placeholder="Device Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={editedDevice.deviceStatusName}
        onChangeText={text => handleChange('deviceStatusName', text)}
        placeholder="Device Status Name"
      />
      <TextInput
        style={styles.input}
        value={editedDevice.memory}
        onChangeText={text => handleChange('memory', text)}
        placeholder="Device Memory"
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    width:'100%',
    color:'black'
  },
  button: {
    backgroundColor: '#ACD7FF',
    padding: 10,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'black',
    letterSpacing:4,
    fontWeight: 'bold',
  },
});

export default EditDevice;
