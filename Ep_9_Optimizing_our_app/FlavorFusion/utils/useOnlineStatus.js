import { useState, useEffect } from "react";

const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

	useEffect(() => {
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});

		window.addEventListener("online", () => {
			setOnlineStatus(true);
		}); //do cleanup
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;
