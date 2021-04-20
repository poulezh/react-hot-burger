import Rebase from 're-base';
import firebase from 'firebase';

//забираем данные о нашей DB 

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCi_QLBLfrGshJTeSrd5K4BoJKS2iVzAmM",
        authDomain: "hot-burgers-fd59e.firebaseapp.com",
        databaseURL: "https://hot-burgers-fd59e-default-rtdb.firebaseio.com",

})
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp};
export  default base;