import { useState } from 'react';
import CreateDevice from '../view/CreateDevice';

const CreateDeviceScreen = () => {
  const [deviceModel, setDeviceModel] = useState('');
  const [deviceStatusId, setDeviceStatusId] = useState('');
  const [deviceCompanyId, setDeviceCompanyId] = useState('');
  const [deviceCategoryId, setDeviceCategoryId] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [memory, setMemory] = useState('');

  const addDevice = async () => {
    try {
      const response = await fetch('http://115.186.185.238:5401/api/device/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          device_model: deviceModel,
          device_status_id: deviceStatusId,
          device_company_id: eviceCompanyId,
          device_category_id: deviceCategoryId,
          img,
          price,
          color,
          memory,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Something went wrong. Please try again later.');
    }
  };

  return {
    deviceModel,
    setDeviceModel,
    deviceStatusId,
    setDeviceStatusId,
    deviceCompanyId,
    setDeviceCompanyId,
    deviceCategoryId,
    setDeviceCategoryId,
    img,
    setImg,
    price,
    setPrice,
    color,
    setColor,
    memory,
    setMemory,
    addDevice,
  };
};

export default CreateDeviceScreen;
