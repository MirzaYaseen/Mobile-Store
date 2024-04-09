import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CategoryListViewModel from '../viewModel/ListCategoryViewModel';

const CategoryList = () => {
  const [viewModel, setViewModel] = useState(new CategoryListViewModel());

  useEffect(() => {
    async function fetchData() {
      await viewModel.fetchCategories();
      setViewModel({ ...viewModel });
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {viewModel.categories.map(category => (
          <View key={category.device_category_id} style={styles.categoryItem}>
            <Text style={styles.categoryName}>{category.device_category_name}</Text>
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
  categoryItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color:'black'
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  text: {
    color:'black'
  },
});

export default CategoryList;
