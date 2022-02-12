const customFetch = (time, data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data != null ? resolve(data) : reject("Hubo un problema...");
		}, time);
	});
};

export default customFetch;
