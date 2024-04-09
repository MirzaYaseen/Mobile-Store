import DeviceFormDataModel from '../models/CreateDeviceModel';
import axios from 'axios';

class DeviceFormViewModel {
  constructor() {
    this.formData = new DeviceFormDataModel();
  }

  postForm() {
    const { formData } = this;
    const formdata = new FormData();
    formdata.append('device_status_id', formData.device_status_id);
    formdata.append('device_company_id', formData.device_company_id);
    formdata.append('device_category_id', formData.device_category_id);
    formdata.append('device_model', formData.device_model);
    formdata.append('img', formData.img);
    formdata.append('price', formData.price);
    formdata.append('memory', formData.memory);
    formdata.append('color', formData.color);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const url = 'http://115.186.185.238:5401/api/device/';

    return axios.post(url, formdata, config);
  }

  handleChange(value, name) {
    this.formData[name] = value;
  }
}

export default DeviceFormViewModel;
