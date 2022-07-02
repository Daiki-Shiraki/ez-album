import { FormControl, Select, Input, FormLabel, Box, Container, Center, VStack, StackDivider, Button, Image } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState} from "react";
import styles from "../styles/UploadPhoto.module.css"

const Form = () => {
  // 状態管理する変数と状態更新する関数の定義
  const [photo, setPhoto] = useState('');
  const [folder, setFolder] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  // Changeイベント時に状態更新
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) : void => { 
    setPhoto(event.target.value);
    let file: File;
    // filesがnullでないことを確約した上でfileに代入
    if(event.target.files != null) {
      file = event.target.files[0];
      setPhotoURL(window.URL.createObjectURL(file));
    }
  }
  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) : void => setFolder(event.target.value);

  const onClickUpload = () => {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('folder', folder);
    try{
      console.log('upload the image!');
      console.log(formData.get('folder'));
      console.log(formData.get('photo'));
      axios.post('http://localhost:3000/images', formData);
    } catch (e) {
      console.log(e);
    };
  };

  return (
    <div>
      <Center>
        <VStack
          spacing={4}
          direction='column'
          align='center'
        >
        <h1 className={`${styles.formCtlPhoto}`}>Upload a photo with a dir tag!</h1>
        <FormControl>
          <FormLabel htmlFor='photo'>Photo:</FormLabel>
          <span className={`${styles.photoLabel}`}>
            <Input id='photo' type='file' accept='image/*' className={`${styles.photoForm}`} onChange={onChangeFile}></Input>
          </span>
          <p className={`${styles.photoText}`}>Select photo</p>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='directory'>Directory</FormLabel>
          <Select id='directory' placeholder='Select directory' size='lg' onChange={onChangeSelect}>
            <option value='msonobe'>msonobe</option>
            <option value='dshiraki'>dshiraki</option>
            <option value='kfukao'>kfukao</option>
          </Select>
        </FormControl>
        <Button colorScheme='teal' size='lg' className={`${styles.sendButton}`} onClick={onClickUpload}>Upload</Button>
        <Image src={photoURL} alt='preview' className={`${styles.photo}`}/>
        </VStack>
      </Center>
    </div>
  )
};

export default Form;