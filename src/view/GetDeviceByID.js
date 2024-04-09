import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DeviceInfo = () => {
  const [device, setDevice] = useState(null);


  useEffect(() => {
    const fetchDevice = async () => {
      try {
        //id is liye nhi daali kyunke hamare pass user static hai is liye 80 id ke against id fetch kar rha hon
        const response = await fetch(`http://115.186.185.238:5401/api/device/getDevice?deviceId=${80}`); 
        const data = await response.json();
        console.log('API response:', data);
        if (data.resultCode === 200) {
          setDevice(data.response);
        } else {
          console.error('Device not found');
        }
      } catch (error) {
        console.error('Error fetching device:', error);
      }
    };

    fetchDevice();
  }, []);

  return (
    <View style={styles.container}>
      {device ? (
        <>
          <Image source={{ uri: device.device_img }} style={styles.image} />
          <Text style={styles.text}>Model: {device.device_model}</Text>
          <Text style={styles.text}>Price: ${device.price}</Text>
          <Text style={styles.text}>Memory: {device.memory}</Text>
          <Text style={styles.text}>Color: {device.color}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading device information...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FBFF',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color:'black'
  },
});

export default DeviceInfo;
