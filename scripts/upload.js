import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ5HrlT2FlNY5tWkNV0yQdCbj6EWPpsuk",
  authDomain: "judge-steely.firebaseapp.com",
  projectId: "judge-steely",
  storageBucket: "judge-steely.appspot.com",
  messagingSenderId: "33184051649",
  appId: "1:33184051649:web:7099a58c97b14c4ca43f40",
  measurementId: "G-QNDZLYXQ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const file = document.getElementById('videoFile').files[0];
  if (file) {
    const storageRef = ref(storage, 'videos/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          alert('Upload successful! Video URL: ' + downloadURL);
        });
      }
    );
  } else {
    alert('Please select a file to upload.');
  }
});


