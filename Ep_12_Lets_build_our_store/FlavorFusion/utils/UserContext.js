import { createContext } from "react";

const UserContext = createContext({
	userName: "DefaultUser",
	userEmail: "default@email.com",
	userAge: 18,
	isPro: false,
});

export default UserContext;
