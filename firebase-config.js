// Firebase configuration loader for Realtime Buzzer
// How to use:
// 1) In Firebase Console -> Project settings -> General -> Your apps -> Web app,
//    copy the SDK setup and configuration.
// 2) EITHER paste it directly as window.FIREBASE_CONFIG = { ... } (recommended),
//    OR paste the snippet as const firebaseConfig = { ... } and this file will export it.
// 3) Ensure databaseURL is present (Realtime Database URL like
//    https://your-project-id-default-rtdb.firebaseio.com)

// --- Option A (recommended): Paste your config object here and UNCOMMENT ---

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCLmffn14gf4jhNIq-lTOvenQ20lI7ean8",
  authDomain: "buzzer-1112a.firebaseapp.com",
  databaseURL: "https://buzzer-1112a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "buzzer-1112a",
  storageBucket: "buzzer-1112a.firebasestorage.app",
  messagingSenderId: "520551209869",
  appId: "1:520551209869:web:5ca092f752a1fb56923bc4"
};


// --- Option B: If you paste "const firebaseConfig = { ... }" from Firebase docs ---
// This block will export it to the expected global window.FIREBASE_CONFIG
// so the rest of the app can find it without you renaming anything.
(function(){
  // If user pasted: const firebaseConfig = { ... }
  if (typeof window !== 'undefined'
      && typeof window.FIREBASE_CONFIG === 'undefined'
      && typeof firebaseConfig !== 'undefined') {
    window.FIREBASE_CONFIG = firebaseConfig;
  }

  // Helpful warning in console if still not set
  if (typeof window !== 'undefined' && !window.FIREBASE_CONFIG) {
    console.warn('[firebase-config] window.FIREBASE_CONFIG is not set. Edit buzzer-rt/firebase-config.js and paste your config.');
  }
})();
