import { createContext, useState, useEffect } from "react";

const LoginContext = createContext({
	isLoggedIn: false,
	isAdmin: false,
	loginEmail: "",
	setIsLoggedIn: () => { },
	setIsAdmin: () => { },
	setLoginEmail: () => { },
})

export const LoginContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [loginEmail, setLoginEmail] = useState("");
	const loginValue = {
		isLoggedIn: isLoggedIn,
		setIsLoggedIn: setIsLoggedIn,
		isAdmin: isAdmin,
		setIsAdmin: setIsAdmin,
		loginEmail: loginEmail,
		setLoginEmail: setLoginEmail,
	};

	//root
	useEffect(() => { console.log(isLoggedIn, isAdmin) }, [isLoggedIn, isAdmin]);

	return (
		<LoginContext.Provider value={loginValue}>
			{props.children}
		</LoginContext.Provider>
	);
}

export default LoginContext;
