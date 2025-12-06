// Thay thông tin của bạn vào đây sau khi tạo dự án Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxx",  // ← thay
  authDomain: "messenger-clone-xxxxx.firebaseapp.com",
  databaseURL: "https://messenger-clone-xxxxx-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "messenger-clone-xxxxx",
  storageBucket: "messenger-clone-xxxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
