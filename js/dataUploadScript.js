const fs = require('fs');
const admin = require('firebase-admin');

// Initialize Firebase Admin with your service account credentials
const serviceAccount = require('/home/griffin/repos/keys/fitframework-4e94c-firebase-adminsdk-fbsvc-0cc6c984a0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Function to upload data from a JSON file to Firestore
const uploadData = async (filePath) => {
  try {
    // Read the data from the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Specify the collection name in Firestore where the data will be uploaded
    const collectionName = 'exercises';

    // Loop through the data and add each entry to Firestore
    for (const item of data) {
      // Create a document in Firestore with a unique ID (or specify a custom ID)
      await db.collection(collectionName).add(item);
      console.log('Document added:', item);
    }

    console.log('Data upload successful!');
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};

// Specify the path to your JSON file
const filePath = '/home/griffin/Downloads/exercises.json';

// Upload the data
uploadData(filePath);