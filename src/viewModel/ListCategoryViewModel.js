import CategoryModel from '../models/ListCategoryModel';
import axios from 'axios';

class CategoryListViewModel {
  constructor() {
    this.categories = [];
  }

  async fetchCategories() {
    try {
      const response = await axios.get('http://115.186.185.238:5401/api/device/listCategory');
      const data = response.data;
      if (data && data.response && Array.isArray(data.response[0])) {
        this.categories = data.response[0].map(categoryData => new CategoryModel(categoryData));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default CategoryListViewModel;
