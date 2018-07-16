import Rebase from 're-base';
import firebase from 'firebase';

try {
  firebase.initializeApp({
    apiKey: "AIzaSyB39n_JmtqSW7zZhCUfUcARgyP_3esueFg",
    authDomain: "invoices-list.firebaseapp.com",
    databaseURL: "https://invoices-list.firebaseio.com",
  });
} catch (err) {
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
    }
}

const base = Rebase.createClass(firebase.database());
  // This is a named export
  export { firebase };

  // This is a default export;
  export default base;


  // try {
  //   firebase.initializeApp({
  //   databaseURL: 'dfgdfg'
  //   })
  //   } catch (err) {
  //   // we skip the "already exists" message which is
  //   // not an actual error when we're hot-reloading
  //   if (!/already exists/.test(err.message)) {
  //   console.error('Firebase initialization error', err.stack)
  //   }
  //   }
    
    // const fb= firebase
    // export default fb`