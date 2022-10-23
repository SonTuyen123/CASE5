import React, { useEffect, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function Demo() {
  const [mp3Upload, setMp3Upload] = useState(null);
  const [ImageUpload, setImageUpload] = useState(null);
  const [mp3List, setMp3List] = useState([]);

  let types = /(\.|\/)(mp3)$/i;

  const mp3ListRef = ref(storage, "mp3/");
  const handleUpload = () => {
    if (mp3Upload === null) {
      return;
    } else if (types.test(mp3Upload.type) || types.test(mp3Upload.name)) {
      alert("oke");
      const imageRef = ref(storage, `mp3/${mp3Upload.name + v4()}`);
      uploadBytes(imageRef, mp3Upload).then((snaphost) => {
        getDownloadURL(snaphost.ref).then((url) => {
          setMp3List((prev) => [...prev, url]);
        });
      });
    } else {
      alert("file is invalid");
    }
  };

  const handleImageUpload = (e) => {
    let file = e.target.files[0];

    const fileType = file["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (!validImageTypes.includes(fileType)) {
      console.log("Loi");
    } else {
      setImageUpload(file);
    }
  };

  useEffect(() => {
    listAll(mp3ListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setMp3List((prev) => [...prev, url]);
        });
      });
    });
  }, [mp3Upload]);

  return (
    <>
      <br />
      <label>
        Chọn file mp3
        <input
          type="file"
          onChange={(event) => {
            setMp3Upload(event.target.files[0]);
          }}
        />
      </label>
      <label>
        Chọn ảnh
        <input
          type="file"
          onChange={(event) => {
            handleImageUpload(event);
          }}
        />
      </label>
      <button onClick={handleUpload}>Upload</button>
      {mp3List.map((url) => (
        <div>
          <audio controls autoPlay>
            {/* <source src="horse.ogg" type="audio/ogg" /> */}
            <source src={url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}

      <div>
        <button className="flex items-center justify-center px-3 py-2 space-x-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>Upload</span>
        </button>
      </div>
    </>
  );
}
