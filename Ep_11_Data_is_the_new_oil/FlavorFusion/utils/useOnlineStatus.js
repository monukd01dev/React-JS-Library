import { useState, useEffect } from "react";

/*

I am using Singleton Patter approach here cause I need performance and simplicity : the singleton approach attaches listeners only once and simplifies the event handling for the entire app.

but eventually this sucks! why casue explaination is on figma

let isListenerAttached = false;

const useOnlineStatus = (whoes) => {
	const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

	useEffect(() => {
		const updateStatus = () => {
			console.log(
				`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-${whoes},${onlineStatus},${isListenerAttached}`,
			);
			setOnlineStatus(navigator.onLine);
		};

		if (!isListenerAttached) {
			window.addEventListener("offline", updateStatus);

			window.addEventListener("online", updateStatus);

			isListenerAttached = true;
		}
	}, [whoes]);

	return onlineStatus;
};

*/

/*
Clean Uproach -> go when you need flexibility : because it allows different components to handle the online/offline status differently, with proper scoped event management.

why I am not using this cause I have to handle the online/offline status differently -> just have to show the <NoInternet/> basis of online status...

but some how singleton approach sucks and I am back to this


*/
const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

	useEffect(() => {
		const updateStatus = () => setOnlineStatus(navigator.onLine);

		window.addEventListener("offline", updateStatus);

		window.addEventListener("online", updateStatus);

		return () => {
			window.removeEventListener("offline", updateStatus);
			window.removeEventListener("online", updateStatus);
		};
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;
