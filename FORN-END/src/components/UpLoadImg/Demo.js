import React, { useEffect, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function Demo() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const handleUpload = () => {
    if (imageUpload === null) {
      return;
    } else {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snaphost) => {
        getDownloadURL(snaphost.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    }
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <br />
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
      {imageList.map((url) => {
        return <img src={url}></img>;
      })}
    </>
  );
}
