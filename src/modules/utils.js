// block scope with let
let utils = {

	// Enhanced Object Literals
	sum(v1, v2) {
		return (v1 + v2);
	},

	// Default paramater
	message(text = 'Hello World!') {
		return text;
	}
}

// export module
export default utils;