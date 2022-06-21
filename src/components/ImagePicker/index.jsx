import React, { useState } from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerCustom() {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button  title="Selecione uma foto" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 100 }} />}
    </View>
  );
}