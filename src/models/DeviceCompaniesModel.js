class CompanyModel {
    constructor(data) {
      this.device_company_id = data.device_company_id;
      this.device_company_name = data.device_company_name;
      this.device_company_description = data.device_company_description;
      this.device_company_logo = data.device_company_logo;
      this.device_category_id = data.device_category_id;
    }
  }
  
  export default CompanyModel;
  