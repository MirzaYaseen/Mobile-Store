import axios from 'axios';
import CompanyModel from '../models/DeviceCompaniesModel';

class DeviceCompaniesViewModel {
  constructor() {
    this.companies = [];
  }

  async fetchCompanies() {
    try {
      const response = await axios.get('http://115.186.185.238:5401/api/device/listCompany');
      const data = response.data;
      if (data && data.response && Array.isArray(data.response[0])) {
        this.companies = data.response[0].map(companyData => new CompanyModel(companyData));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default DeviceCompaniesViewModel;
