import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import StatusListViewModel from '../viewModel/ListStatusViewModel';

const StatusList = () => {
  const [viewModel, setViewModel] = useState(new StatusListViewModel());

  useEffect(() => {
    async function fetchData() {
      await viewModel.fetchStatuses();
      setViewModel({ ...viewModel });
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {viewModel.statuses.map(status => (
          <View key={status.device_status_id} style={styles.statusItem}>
            <Text style={styles.statusName}>{status.device_status_name}</Text>
            <Text style={styles.text}>ID: {status.device_status_id}</Text>
            <Text style={styles.text}>
              Description: {status.device_status_description || 'N/A'}
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
  statusItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color:'black'
  },
  statusName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  text: {
    color:'black'
  },
});

export default StatusList;
