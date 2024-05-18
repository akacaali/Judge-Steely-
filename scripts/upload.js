document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const file = document.getElementById('videoFile').files[0];
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  alert('File uploaded successfully!');
});
