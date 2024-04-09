import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import DeviceFormViewModel from '../viewModel/CreateDeviceViewModel';
import RNPickerSelect from 'react-native-picker-select';
import ImagePickerButton from '../components/ImagePicker';

const DeviceForm = () => {
  const viewModel = new DeviceFormViewModel();

  const handleSubmit = () => {
    viewModel
      .postForm()
      .then(response => {
        if (response.status === 200) {
          console.log('Successfully created');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View>
      <ImagePickerButton
        imageUri={viewModel.formData.img}
        onChangeImage={viewModel.handleChange.bind(viewModel)}
      />

      <RNPickerSelect
        placeholder={{
          label: 'Select Status',
          value: null,
        }}
        onValueChange={value =>
          viewModel.handleChange(value, 'device_status_id')
        }
        items={[
          {label: 'Created', value: 'created'},
          {label: 'Draft', value: 'draft'},
          {label: 'Approved', value: 'approved'},
        ]}
        style={pickerSelectStyles}
      />

      <RNPickerSelect
        placeholder={{
          label: 'Select Company',
          value: null,
        }}
        onValueChange={value =>
          viewModel.handleChange(value, 'device_company_id')
        }
        items={[
          {label: 'Oppo', value: 'oppo'},
          {label: 'Samsung', value: 'samsung'},
          {label: 'Tecno', value: 'tecno'},
        ]}
        style={pickerSelectStyles}
      />

      <RNPickerSelect
        placeholder={{
          label: 'Select Category',
          value: null,
        }}
        onValueChange={value =>
          viewModel.handleChange(value, 'device_category_id')
        }
        items={[
          {label: 'Mobile', value: 'mobile'},
          {label: 'IOT Devices', value: 'iot_devices'},
        ]}
        style={pickerSelectStyles}
      />

      <TextInput
        placeholder="Device Model"
        onChangeText={text => viewModel.handleChange(text, 'device_model')}
        style={style.textInput}
      />

      <TextInput
        placeholder="Price"
        onChangeText={text => viewModel.handleChange(text, 'price')}
        style={style.textInput}
      />

      <TextInput
        placeholder="Memory"
        onChangeText={text => viewModel.handleChange(text, 'memory')}
        style={style.textInput}
      />

      <TextInput
        placeholder="Color"
        onChangeText={text => viewModel.handleChange(text, 'color')}
        style={style.textInput}
      />

      <TouchableOpacity style={style.btn} onPress={handleSubmit}>
        <Text style={style.btnText}>Create Device</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  btn: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ACD7FF',
    width: '90%',
    height: 50,
    borderRadius: 10,
  },
  btnText:{
    color:'black', fontSize:16, fontWeight:'bold'
  }
});
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  placeholder: {
    color: 'black',
  },
};

export default DeviceForm;
