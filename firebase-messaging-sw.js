importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyD2c-UOFZ0T6CfCxk1ZYyER6taMtKQnrK4",
  projectId: "humiclamp",
  messagingSenderId: "31653540479",
  appId: "1:31653540479:web:56ebc4fcb0695fc111054a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
