import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
	apiKey: "AIzaSyDvwkUY9KWv6uYSxKNyXTSqUuZFktKeNHA",
	authDomain: "yair-behar.firebaseapp.com",
	projectId: "esther-wahnon-b3cb2",
	storageBucket: "esther-wahnon-b3cb2.appspot.com",
	messagingSenderId: "647954127299",
	appId: "1:647954127299:web:110d58ce882bbd1d500576",
	measurementId: "G-LJPYXG4CXL"
});
getAnalytics(app); // start analytics