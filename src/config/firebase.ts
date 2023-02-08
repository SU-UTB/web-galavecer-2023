// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyANxqbQyo5hau-HnKDwj0QtDCac9sobBbI',
  authDomain: 'su-galavecer.firebaseapp.com',
  projectId: 'su-galavecer',
  storageBucket: 'su-galavecer.appspot.com',
  messagingSenderId: '998268316159',
  appId: '1:998268316159:web:1ab00c8bab566017bd9fca',
  measurementId: 'G-TJDC07R19G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
