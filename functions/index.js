const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { getStorage } = require('firebase-admin/storage');
const { getFunctions } = require('firebase-admin/functions');
admin.initializeApp();

exports.uploadVideo = functions.storage.object().onFinalize(async (object) => {
  const filePath = object.name;
  console.log(`File uploaded: ${filePath}`);
  // Add your video processing logic here
});
