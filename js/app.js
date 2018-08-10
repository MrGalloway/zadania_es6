//zadanie1
const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
const length = [];

cities.forEach((element)=>length.push(element.length));
console.log(length);

//zadanie2
const years = [1995, 1856, 2014, 1987];
const ages = [];

years.forEach((element)=>ages.push(2018 - element));
console.log(ages);

//zadanie3
const numbers = [22, 17, 39, 42, 3, 71];
let sum = 0;
let product = 1; //makes multiplication work

numbers.forEach((element)=>{
	sum += element;
	product *= element;
	console.log(element);
});

console.log("sum: " + sum);
console.log("product: " + product);

//zadanie4
const url = "http://domanart.pl/CODERS/zagadki/tablice-es6/dane.json";
fetch(url)
    .then(response => response.json()) //Zamienic na odpowiedni format
    //.then(response => users = response); //Console log wynik
	.then(
			response => {
				console.group("Wszyscy użytkownicy")
				console.log(response.users)
				console.groupEnd()
				console.log(' ')
				console.group("Wszyscy użytkownicy")
				console.log(response.users.filter(user=>user.age>=18))
				console.groupEnd()
				console.log(' ')
				console.group("Wszystkie kobiety")
				console.log(response.users.filter(user=>user.gender==="female"))
				console.groupEnd()
				console.log(' ')
				console.group("Użytkownicy z tagiem \"dolor\"")
				console.log(response.users.filter(user=>user.tags.includes("dolor")))
				console.groupEnd()
				console.log(' ')
				console.group("Wszyscy użytkownicy są pełnoletni:")
				console.log(response.users.every(user=>user.age>=18))
				console.groupEnd()
				console.log(' ')
				console.group("Niektórzy użytkownicy są pełnoletni:")
				console.log(response.users.some(user=>user.age>=18))
				console.groupEnd()
				console.log(' ')
				console.group("Nazwy użytkowników wypisane dużymi literami:")
				console.log(response.users.map(user=>user.name.toUpperCase()))
				console.groupEnd()
				console.log(' ')
			}
	);



