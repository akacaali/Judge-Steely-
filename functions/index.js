const functions = require("firebase-functions");
const { ErrorReporting } = require("@google-cloud/error-reporting");

const errors = new ErrorReporting();

exports.uploadVideo = functions.https.onRequest((req, res) => {
  try {
    // Your function logic here

    res.send("Video uploaded successfully.");
  } catch (err) {
    errors.report(err);
    res.status(500).send("An error occurred while uploading the video.");
  }
});


