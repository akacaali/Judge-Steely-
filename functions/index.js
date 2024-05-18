const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.uploadVideo = functions.storage.object().onFinalize(async (object) => {
  const filePath = object.name;
  console.log(`File uploaded: ${filePath}`);
  // Add your video processing logic here
  console.log('Processing completed for file: ', filePath);
});

