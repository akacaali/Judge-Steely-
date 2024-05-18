// Import and configure Firebase
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";

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
const storage = getStorage(app);
const functions = getFunctions(app);

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const videoFile = document.getElementById('videoFile').files[0];

  if (videoFile) {
    const storageRef = ref(storage, `videos/${Date.now()}_${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on('state_changed', 
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '% uploaded');
      }, 
      (error) => {
        console.error('Upload failed:', error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);

          const processVideo = httpsCallable(functions, 'processVideo');
          processVideo({ videoUrl: downloadURL }).then((result) => {
            console.log('Video processed:', result.data);
            alert('Video processed successfully! Check the result: ' + result.data.analysis);
          }).catch((error) => {
            console.error('Error processing video:', error);
          });
        });
      }
    );
  } else {
    alert('Please upload a video file.');
  }
});
