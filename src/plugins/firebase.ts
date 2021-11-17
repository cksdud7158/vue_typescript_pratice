import Vue from "vue";
import firebase from "firebase/compat";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import firebaseConfig from "../../firebaseConfig";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const rdb = firebase.database();

auth.useDeviceLanguage();

// 테스트 시 emulator 로 신호를 보내겠다.
if (location.hostname === "localhost") {
  auth.useEmulator("http://localhost:6680/");
  db.useEmulator("localhost", 7777);
  rdb.useEmulator("localhost", 6670);
}

Vue.prototype.$firebase = firebase;

export default firebase;
