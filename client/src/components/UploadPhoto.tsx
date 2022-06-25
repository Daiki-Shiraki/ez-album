import axios from 'axios';
import React, {useState} from "react";

const Form = () => {
  const [photo, setPhoto] = useState('');
  const [folder, setFolder] = useState('');

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) : void => setPhoto(event.target.value)
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) : void => setFolder(event.target.value)

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
      <h1>写真をアップロード</h1>
      <div>
        <input type={'file'} value={photo} onChange={onChangeFile} style={{ border: "1px solid #222", borderRadius: 10, padding: 10, cursor: "pointer" }}/>
        <input type={'text'} value={folder} onChange={onChangeText} style={{ border: "1px solid #222", borderRadius: 10, padding: 10, cursor: "pointer" }}/>
        <button onClick={onClickUpload}>アップロード</button>
      </div>
    </div>
  )
};

export default Form;