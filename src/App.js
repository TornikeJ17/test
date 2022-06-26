import React, { useState, useEffect } from 'react'
import { Container } from './Styled'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from './components/api/firebase'
import { v4 } from 'uuid'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Images } from './components/api/api'
import Show from './components/Show'

const App = () => {
  const [data, setData] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
    ImageAPI()
  }, []);
  const ImageAPI = async () => {
    setData(await Images())
  }



  return (
    <Container>
      <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
      <button onClick={uploadFile}>upload image</button>
      <Show
        data={data}
        imageUrls={imageUrls}
      />
    </Container>
  )
}
export default App