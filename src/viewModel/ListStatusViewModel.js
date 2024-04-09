import StatusModel from '../models/ListStatusModel';
import axios from 'axios';

class StatusListViewModel {
  constructor() {
    this.statuses = [];
  }

  async fetchStatuses() {
    try {
      const response = await axios.get('http://115.186.185.238:5401/api/device/listStatus');
      const data = response.data;
      if (data && data.response && Array.isArray(data.response[0])) {
        this.statuses = data.response[0].map(statusData => new StatusModel(statusData));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export default StatusListViewModel;
