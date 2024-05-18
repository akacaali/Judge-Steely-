import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const file = document.getElementById('videoFile').files[0];
  if (!file) {
    console.error("No file selected");
    return;
  }

  const storage = getStorage();
  const storageRef = ref(storage, 'uploads/' + file.name);
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
        alert('Upload successful! File available at: ' + downloadURL);
      });
    }
  );
});
