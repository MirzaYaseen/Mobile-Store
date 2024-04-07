import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://115.186.185.238:5401/api/device/listCategory')
      .then(response => response.json())
      .then(data => {
        const categoryData = data.response[0];
        setCategories(categoryData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {categories.map(category => (
          <View key={category.device_category_id} style={styles.categoryItem}>
            <Text style={styles.categoryName}>
              {category.device_category_name}
            </Text>
            <Text style={styles.text}>ID: {category.device_category_id}</Text>
            <Text style={styles.text}>
              Description: {category.device_category_description || 'N/A'}
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
    color: 'black',
  },
  categoryItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color: 'black',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export default CategoryList;

