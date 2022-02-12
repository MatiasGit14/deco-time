import images from "../assets/img/Images";

const productsList = [
	{
		id: 1,
		title: "Almohadones",
		description: "Almohadones de arpillera",
		price: 1500,
		pictureUrl: images.almohadon,
		stock: 10,
		details:
			"Almohadones de arpillera con inscripciones, se pueden utilizar tanto en el interior como en el exterior",
	},
	{
		id: 2,
		title: "Espejo Gold",
		description: "Espejo estilo maquillaje",
		price: 2700,
		pictureUrl: images.espejo,
		stock: 8,
		details: "Espejo chico para maquillaje o decorativo bañado en oro",
	},
	{
		id: 3,
		title: "Farol con vela",
		description: "Farol de hierro y vidrio",
		price: 190,
		pictureUrl: images.farol,
		stock: 13,
		details:
			"Farol tanto para interiores o exteriores de hierro forjado y tapas de vidrio. Incluye vela para interior del farol",
	},
];

export default productsList;
