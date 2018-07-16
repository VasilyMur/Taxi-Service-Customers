import Rebase from 're-base';
import firebase from 'firebase';


const config = {
    //apiKey: "AIzaSyB39n_JmtqSW7zZhCUfUcARgyP_3esueFg",
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_URL
    apiKey: "AIzaSyB39n_JmtqSW7zZhCUfUcARgyP_3esueFg",
    authDomain: "invoices-list.firebaseapp.com",
    databaseURL: "https://invoices-list.firebaseio.com",
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const base = Rebase.createClass(firebase.database());
  // This is a named export
  export { firebase };

  // This is a default export;
  export default base;