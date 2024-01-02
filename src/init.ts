import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { apiKey, appId, authDomain, measurementId, messagingSenderId, projectId, storageBucket } from "./vite-env";

const app = initializeApp({
	apiKey: apiKey,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId:measurementId
});
getAnalytics(app); // start analytics