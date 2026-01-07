importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "YOUR API KEY",
  projectId: "humiclamp",
  messagingSenderId: "31653540479",
  appId: "YOUR APP ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
