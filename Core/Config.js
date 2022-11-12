import { initializeApp } from "firebase/app";
import getFireStore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD40hMeIM6CmzSqVDSEXMZ058PWMVAZcdg",
  authDomain: "reactnativeapp-1ff4c.firebaseapp.com",
  projectId: "reactnativeapp-1ff4c",
  storageBucket: "reactnativeapp-1ff4c.appspot.com",
  messagingSenderId: "228712433844",
  appId: "1:228712433844:web:fe8311ae2d461663fbefe1",
  measurementId: "G-Q81HQNB7EM",
};

export const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
