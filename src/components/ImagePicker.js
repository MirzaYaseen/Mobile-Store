import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-crop-picker';

const ImagePickerButton = ({ imageUri, onChangeImage }) => {
  const handleImagePick = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      onChangeImage(image.path);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  return (
    <TouchableOpacity style={{justifyContent:'center', alignSelf:'center'}} onPress={handleImagePick}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 60, alignSelf:'center', justifyContent:'center' }} />
      ) : (
        <Image source={require('../assets/image.png')} style={{ width: 100, height: 100, borderRadius: 60 }} />
      )}
    </TouchableOpacity>
  );
};

export default ImagePickerButton;
