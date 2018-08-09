# ES6 - zadania
> Do realizacji zadań używaj odpowiednich metod do operacji na tablicach, dostępnych w ES6: ```forEach()```, ```map()```, ```filter()``` i ```reduce()```. Wykorzystuj ```arrow functions```, ```template literals``` i wszelkie inne dobroci ES6.
Wszystkie zadania rozwiązuj w pliku app.js, chyba że treść zadania wskazuje inaczej. Tradycyjnie - czysty kod i komentarze.
## Rozgrzewka
### Zadanie 1

Mając do dyspozycji tablicę z nazwami miast, zwróć i wypisz nową tablicę z ilością liter każdego miasta.

Na przykład dla tablicy miast:
```JavaScript
const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
```
Wynik powinien być następujący:

```JavaScript
[6, 7, 8, 19];
```

### Zadanie 2

Mając do dyspozycji tablicę z latami, stwórz nową tablicę, która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę.

```JavaScript
const years = [1995, 1856, 2014, 1987];
```

### Zadanie 3 

Mając do dyspozycji tablicę z liczbami, zwróć i wyświetl:
*  wynik dodawania wszystkich liczb z tablicy 
*  wynik mnożenia wszystkich liczb z tablicy 
```JavaScript
const numbers = [22, 17, 39, 42, 3, 71]
```

### Zadanie 4 
 Połącz się z adresem http://domanart.pl/CODERS/zagadki/tablice-es6/dane.json
i pobierz z niego dane w formacie json (nic nie wysyłaj). Jest tam tablica userów.

>HINT: http://kursjs.pl/kurs/ajax/fetch.php
```JavaScript
fetch(url)
    .then(response => response.json()) //Zamienic na odpowiedni format
    .then(response => console.log(response)); //Console log wynik
```

Używaj odpowiednich metod dla tablic. **Używaj jak najkrótszego zapisu.**

Skorzystaj z instrukcji:
```JavaScript
console.group("Nazwa grupy")
console.log(....)
console.groupEnd();
```
do pogrupowania treści w konsoli lub
```JavaScript
console.log(' ') 
```
do oddzielenia zadań

      Wypisz w konsoli:
 
     - tekst: "Wszyscy użytkownicy"
     - tablicę z wszystkimi użytkownikami

     - tekst: "Wszyscy użytkownicy pełnoletni:"
     - tablicę z wszystkimi użytkownikami pełnoletnimi

     - tekst: "Wszystkie kobiety:"
     - tablicę z wszystkimi kobietami

     - tekst: "Użytkownicy z tagiem "dolor":
     - tablicę użytkowników którzy mają tag "dolor"

     - tekst: "Wszyscy użytkownicy są pełnoletni:"
     - prawda/fałsz

     - tekst: "Niektórzy użytkownicy są pełnoletni:"
     - prawda/fałsz

     - tekst: "Nazwy użytkowników wypisane dużymi literami:"
     - nową tablicę z nazwami użytkowników zamienionymi tak, by były napisane dużymi literami

## Arrow functions, spread rest etc.

#### Zadanie 1

Stwórz funkcję ```saySomething()``` (arrow function) i jako parametr przekaż jej następujący obiekt:

```JavaScript
const wally = {
    name: "Wally",
    age: 2,
    proffesion: "Naprawianie innych robotów"    
}
```
Następnie w funkcji za pomocą destrukturyzacji podstaw wszystkie 3 atrybuty obiektu pod takie same nazwy zmiennych i na podstawie tych zmiennych zwróć string w postaci:

 ```HTML
 Cześć mam na imię Wally, mam 2 lata i moim zajęciem jest Naprawianie innych robotów".
 ```

### Zadanie 2 
Napisz funkcję, która sama się wywoła ```(IIFE)``` i której zadaniem jest zwrócenie przekazanego do niej parametru.

### Zadanie 3
Napisz funkcję, która jako parametr przyjmie liczbę całkowitą od 1-10. Ustaw domyślną wartość dla parametru. W funkcji uruchom funkcję ```setInterval``` z interwałem 500ms. Jego zadaniem jest wypisywanie w konsoli tekstu _"Hello"_ oraz licznika zliczającego, który raz został uruchomiony ```setInterval```. Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, interwał powinien zakończyć się.

### Zadanie 4

W pliku ```zadanie04.js``` dopisz funkcję ```generateLinks```, która na podstawie istniejącej tablicy z nazwami serwisów internetowych stworzy nową tablicę z linkami do tych stron.

Na przykład:
```JavaScript
let app = new App();
app.generateLinks();
console.log(app.links) // ["https://onet.com", "https://wp.com", "https://facebook.com"]
```

### Zadanie 5 
Stwórz funkcję ```sayHello```, której celem będzie wypisanie ```Hello``` dla wszystkich jej parametrów. Parametry powinny być stringami. Wykorzystaj ```rest/spread operator```

```JavaScript
sayHello("Ania", "Kasia", "Steve", "Bogumił");
```
Wynik w konsoli:

```HTML
Hello: Ania
Hello: Kasia
Hello: Steve
Hello: Bogumił
```

### Zadanie 6
Stwórz funkcję ```getAverage```, która może przyjąć dowolną liczbę parametrów (w postaci liczb) i która zwraca średnią arytmetyczną tych liczb. Wykorzystaj ```rest/spread operator```

```JavaScript
getAverage(2,4,5,6,7,79);
```

## Klasy

### Zadanie 1 

Stwórz klasę ```Kaczka```. Stwórz wewnątrz tej klasy konstruktor i metody:

* konstruktor - którego zadaniem będzie ustawienie typu kaczki na "zwykła kaczka"  ```this.type = "zwykla kaczka"```
* sayQuak() - wypisuje "kwa kwa"
* swim() - wypisuje "płynę..."
* display() - wypisuje "Wygląda jak ```[typ kaczki]```". 

Stwórz obiekt ```kaczuszka```. Wywołaj dla niego wszystkie metody.

### Zadanie 2

Na bazie  klasy ```Kaczka``` stwórz kolejną o nazwie ```DzikaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```display()``` typ kaczki zmienił się na "dzika". Stwórz obiekt ```dzikaKaczuszka```. Wywołaj dla niego wszystkie metody.

### Zadanie 3

Na bazie klasy ```Kaczka``` stwórz kolejną o nazwie ```KrzyzowkaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```display()``` typ kaczki zmienił się na "krzyżówka". Stwórz obiekt ```krzyzoKaczuszka```. Wywołaj dla niego wszystkie metody.

### Zadanie 4 

Dodaj do odpowiedniej kalsy metodę ```fly()```, tak żeby kaczki mogły latać. Metoda ma wypisywać w konsoli tekst "Lecę".

### Zadanie 5 
Na bazie  klasy ```Kaczka``` stwórz ostatnią klasę o nazwie ```GumowaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```display()``` typ kaczki zmienił się na "gumowa". Stwórz obiekt ```gumowaKaczuszka```. Wywołaj dla niego wszystkie metody. Gumowa kaczka nie umie latać, więc w odpowiedni sposób nadpisz metodę ```fly()``` tak, aby po jej wywołaniu w przypadku gumowej kaczki w konsoli wypisany został tekst: "gumowe kaczki nie potrafią latać :(".



Credits: Coders Lab, Marcin Domański, Jakub Bem