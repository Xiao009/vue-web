import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDVkKJYwV651eyDFHY3_JmE219QJTwxqas",
    authDomain: "vue-streamflow.firebaseapp.com",
    databaseURL: "https://vue-streamflow.firebaseio.com",
    projectId: "vue-streamflow",
    storageBucket: "vue-streamflow.appspot.com",
    messagingSenderId: "63971018490",
    appId: "1:63971018490:web:8744eb287c6a5abe77eb43",
    measurementId: "G-20W7T9G6FL"
  };
  export const fb = firebase.initializeApp(firebaseConfig);

