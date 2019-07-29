const cars = [
	{
		image: "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg",
		title: "BMW M2 Coupe", 
		price: "20000"
	},
	{
		image: "https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598",
		title: "Audi TT", 
		price: "15000"
	},
	{
		image: "http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg",
		title: "Rolls Royce", 
		price: "50000"
	},
	{
		image: "https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2",
		title: "Mercedes amg coupe", 
		price: "18000"
	}
]


function createCar(car) {
	return `
	<div class="card">
		<div class="card-img">
			<img 
				src="${car.image}" 
				alt="${car.title}">
		</div>
		<h3>${car.title}</h3>
		<p>${car.price} $</p>
	</div>
	`
}

const templates = cars.map(car => createCar(car))
const html = templates.join('  ')

document.querySelector('.list').innerHTML = html