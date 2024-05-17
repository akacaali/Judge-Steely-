document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const videoFile = document.getElementById('videoFile').files[0];
  
  if (videoFile) {
    const formData = new FormData();
    formData.append('video', videoFile);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Display analysis results
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    alert('Please upload a video file.');
  }
});

