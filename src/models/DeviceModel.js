class DeviceModel {
    constructor(data) {
      this.deviceId = data.device_id;
      this.deviceStatusId = data.device_status_id;
      this.deviceCompanyId = data.device_company_id;
      this.deviceCategoryId = data.device_category_id;
      this.deviceModel = data.device_model;
      this.deviceImg = data.device_img;
      this.price = data.price;
      this.color = data.color;
      this.createdDate = data.created_date;
      this.updateDate = data.update_date;
      this.memory = data.memory;
      this.deviceCategoryName = data.device_category_name;
      this.deviceCompanyName = data.device_company_name;
      this.deviceStatusName = data.device_status_name;
    }
  }
export default DeviceModel;
  