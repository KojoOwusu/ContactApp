//strips off id from uri params to be passed as id

export const getIdFromPath = (path: string) => {
	var index = path.lastIndexOf(":");
	const id = path.slice(++index, path.length);
	return parseInt(id, 10);
};
