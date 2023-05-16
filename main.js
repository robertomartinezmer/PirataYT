import * as C from "./funciones.js";

btnsearch.addEventListener("click", () => {
	let buscador = (document.getElementById("buscador").value).split(" ").join("%20");
	BuscarTodo(buscador);
})

const BuscarTodo = async (buscador) => {
	let url = `https://youtube138.p.rapidapi.com/search/?q=${buscador}&hl=en&gl=US`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'aaae3ef658msh451c8cdc3dc7901p195a71jsna3ed1b1c302a',
			'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		C.construirYoutube(result);
	} catch (error) {
		console.error(error);
	}
};





