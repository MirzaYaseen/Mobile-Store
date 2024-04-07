import DeviceModel from '../models/DeviceModel';

class DeviceListViewModel {
  async fetchDevices() {
    try {
      const response = await fetch('http://115.186.185.238:5401/api/device/listing');
      const data = await response.json();
      return data.response.map(deviceData => new DeviceModel(deviceData));
    } catch (error) {
      console.error('Error fetching devices:', error);
      return [];
    }
  }
}

export default DeviceListViewModel;
