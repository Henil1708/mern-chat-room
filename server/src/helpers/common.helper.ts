
const generateRandomNumber = (max:number , min:number) => {

	return Math.floor(Math.random() * (max - min + 1)) + 1;

}

export { generateRandomNumber };
