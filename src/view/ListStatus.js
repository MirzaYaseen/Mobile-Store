import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const StatusList = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch('http://115.186.185.238:5401/api/device/listStatus')
      .then(response => response.json())
      .then(data => {
        const statusData = data.response[0];
        setStatuses(statusData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {statuses.map(status => (
          <View key={status.device_status_id} style={styles.statusItem}>
            <Text style={styles.statusName}>{status.device_status_name}</Text>
            <Text style={styles.text}>ID: {status.device_status_id}</Text>
            <Text style={styles.text}>
              Description: {status.device_status_decsription || 'N/A'}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FBFF',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',

    textAlign: 'center',
    color: 'black',
    marginBottom: 30,
  },
  statusItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color: 'black',
  },
  statusName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export default StatusList;
