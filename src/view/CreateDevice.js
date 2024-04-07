import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const CreateDevice = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    device_status_id: '',
    evice_company_id: '',
    device_category_id: '',
    device_model: '',
    img: null,
    price: '',
    memory: '',
    color: '',
  });

  const handleImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setFormData({...formData, img: image.path});
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('device_status_id', formData.device_status_id);
      formDataToSend.append('device_company_id', formData.evice_company_id);
      formDataToSend.append('device_category_id', formData.device_category_id);
      formDataToSend.append('device_model', formData.device_model);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('memory', formData.memory);
      formDataToSend.append('color', formData.color);
      formDataToSend.append('img', {
        uri: formData.img,
      });

      const response = await fetch('http://115.186.185.238:5401/api/device/', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formDataToSend,
      });

      const responseData = await response.json();

      if (responseData.resultCode === 200) {
        Alert.alert('Success', responseData.message);
      } else {
        Alert.alert('Error', responseData.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while submitting the form.');
      console.error('Form Submission Error: ', error);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 10}}>
          <View>
            <TouchableOpacity style={style.image} onPress={handleImagePicker}>
              {formData.img ? (
                <Image
                  source={{uri: formData.img}}
                  style={{width: 110, height: 110, borderRadius:60}}
                />
              ) : (
                <Image
                  style={{width: 110, height: 110, borderRadius:60}}
                  source={require('../assets/image.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          <TextInput
            style={style.textInput}
            placeholder="Device Status ID"
            placeholderTextColor='grey'
            onChangeText={value =>
              setFormData({...formData, device_status_id: value})
            }
          />
          <TextInput
            style={style.textInput}
            placeholder="Device Company ID"
            placeholderTextColor='grey'
            onChangeText={value =>
              setFormData({...formData, evice_company_id: value})
            }
          />
          <TextInput
            style={style.textInput}
            placeholder="Device Category ID"
            placeholderTextColor='grey'
            onChangeText={value =>
              setFormData({...formData, device_category_id: value})
            }
          />
          <TextInput
            style={style.textInput}
            placeholder="Device Model"
            placeholderTextColor='grey'
            onChangeText={value =>
              setFormData({...formData, device_model: value})
            }
          />
          <TextInput
            style={style.textInput}
            placeholder="Price"
            placeholderTextColor='grey'
            onChangeText={value => setFormData({...formData, price: value})}
          />
          <TextInput
            style={style.textInput}
            placeholder="Memory"
            placeholderTextColor='grey'
            onChangeText={value => setFormData({...formData, memory: value})}
          />
          <TextInput
            style={style.textInput}
            placeholder="Color"
            placeholderTextColor='grey'
            onChangeText={value => setFormData({...formData, color: value})}
          />

          <TouchableOpacity style={style.createBtn} onPress={handleFormSubmit}>
            <Text style={style.createBtnText}>Create Device</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F9FBFF',
    padding: 5,
    flex: 1,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  createBtn: {
    backgroundColor: '#ACD7FF',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
    color:'black'
  },
  createBtnText: {
    color: 'black',
    letterSpacing:2,
    fontSize: 16,
    fontWeight: '800',
  },
});
export default CreateDevice;
