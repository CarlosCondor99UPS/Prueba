// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'pruebaprogra-bc6d7',
    appId: '1:708462389751:web:5abe028643c3a10bcde6f2',
    storageBucket: 'pruebaprogra-bc6d7.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDf7LDrXJ03wBfAsnnPNR_UInDpbgWdRjw',
    authDomain: 'pruebaprogra-bc6d7.firebaseapp.com',
    messagingSenderId: '708462389751',
    measurementId: 'G-1CNGKENM4J',
  },
  firebaseConfig : {
    apiKey: "AIzaSyDf7LDrXJ03wBfAsnnPNR_UInDpbgWdRjw",
    authDomain: "pruebaprogra-bc6d7.firebaseapp.com",
    projectId: "pruebaprogra-bc6d7",
    storageBucket: "pruebaprogra-bc6d7.appspot.com",
    messagingSenderId: "708462389751",
    appId: "1:708462389751:web:7efda387b6e2c70ccde6f2",
    measurementId: "G-SHCLPSFYES"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);