import firebase from "firebase";
// import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFigj_lqCi4N8Go9P-zPaq8BkiD2Uv6kQ",
    authDomain: "cogneasy-6736c.firebaseapp.com",
    databaseURL: "https://cogneasy-6736c.firebaseio.com",
    projectId: "cogneasy-6736c",
    storageBucket: "cogneasy-6736c.appspot.com",
    messagingSenderId: "789491460983",
    appId: "1:789491460983:web:4ee6c11fdd14be88ed0f72"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings( {
    timestampsInSnapshots : true
})

export default firebaseApp.firestore()