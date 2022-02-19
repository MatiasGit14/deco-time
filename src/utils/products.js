import images from "../assets/img/Images";

const productsList = [
	{
		id: 1,
		title: "Almohadones",
		description: "Almohadones de arpillera",
		price: 1500,
		pictureUrl: images.almohadon,
		smallPic: images.smAlmohadon,
		category: "Textiles",
		categoryId: 1,
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
		smallPic: images.smEspejo,
		category: "Accesorios",
		categoryId: 4,
		stock: 8,
		details: "Espejo chico para maquillaje o decorativo bañado en oro",
	},
	{
		id: 3,
		title: "Farol con vela",
		description: "Farol de hierro y vidrio",
		price: 190,
		pictureUrl: images.farol,
		smallPic: images.smFarol,
		category: "Exterior",
		categoryId: 3,
		stock: 13,
		details:
			"Farol tanto para interiores o exteriores de hierro forjado y tapas de vidrio. Incluye vela para interior del farol",
	},
	{
		id: 4,
		title: "Flores artificiales",
		description: "Flores que imitan perfectamente las flores reales",
		price: 100,
		pictureUrl: images.flores,
		smallPic: images.smFlores,
		category: "Flores",
		categoryId: 2,
		stock: 7,
		details:
			"Flores para decoracion de interiores, salas de espera, dar un aire natural y belleza",
	},
];

export default productsList;
