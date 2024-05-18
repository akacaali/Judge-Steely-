import { storage, functions } from './firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { httpsCallable } from "firebase/functions";

document.getElementById('uploadForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const fileInput = document.getElementById('videoFile');
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const base64File = e.target.result.split(',')[1];

    const uploadVideo = httpsCallable(functions, 'uploadVideo');
    uploadVideo({ file: base64File, fileName: file.name })
      .then((result) => {
        console.log('Video uploaded and processed:', result.data);
      })
      .catch((error) => {
        console.error('Error uploading video:', error);
      });
  };

  reader.readAsDataURL(file);
});

