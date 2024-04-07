import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const DeviceCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('http://115.186.185.238:5401/api/device/listCompany')
      .then(response => response.json())
      .then(data => {
        const companyData = data.response[0];
        setCompanies(companyData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {companies.map(company => (
          <View key={company.device_company_id} style={styles.companyItem}>
            <Text style={styles.companyName}>
              {company.device_company_name}
            </Text>
            <Text style={styles.text}>ID: {company.device_company_id}</Text>
            <Text style={styles.text}>
              Description: {company.device_company_description || 'N/A'}
            </Text>
            <Text style={styles.text}>
              Category ID: {company.device_category_id}
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
    marginBottom: 10,
    textAlign: 'center',
  },
  companyItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export default DeviceCompanies;
