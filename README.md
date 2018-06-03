<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# jQuery & ES6 &ndash; egzamin

## Wytyczne dotyczące githuba

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

## Uwagi dotyczące rozwiązywania zadań

Zadania te są testowane za pomocą **specjalnych testów automatycznych**. Zwróć zatem uwagę na następujące rzeczy:

* Wszędzie gdzie możesz korzystaj z ES6. 

* Jeśli w zadaniu jest wspomniane, aby funkcja zwracała wynik to powinna go zwracać, a nie wyświetlać w konsoli.
(Możesz oczywiście dodatkowo wyświetlać)

* Jeśli w treści zadania jest wspomniane, aby konkretny tekst 
został wpisany/zwrócony/wyśwetlony, to powinien być to dokładnie taki 
sam tekst jak w treści zadania.

* Pamiętaj również o tym, aby nazwy funkcji były dokładnie takie same 
jak w treści zadania. 

* Zadania rozwiązuj w odpowiednich plikach **js**.

* Nie zmieniaj nic w plikach HTML.

* Zawsze sprawdzaj, czy Twoje rozwiązanie działa, jeśli powoduje ono błędy
w konsoli nie zostanie ocenione. W takim wypadku lepiej zakomentuj wrażliwe części.


---------------------------------------------------------------------

## Zadania

### Zadanie 1
(1,5 pkt)

W pliku ```zadanie1.js``` masz przygotowane trzy tablice x, y i z. W funkcji ```joinArrays``` napisz kod, który połączy te trzy tablice w jedną. Funkcja powinna zwrócić tą tablicę, ale liczby powinny być w niej uporządkowane rosnąco. 
Uwaga! Nie korzystaj z metody tablicowej concat.

```JavaScript
var x = [21,3];
var y = [0,12];
var z = [42,5, 2];

joinArrays(x,y,z);  // funkcja powinna zwrócić [0, 2, 3, 5, 12, 21, 42]
```

### Zadanie 2
(3 pkt)

Pamiętaj o używaniu **let** i **const** oraz **funkcji strzałki** wszędzie gdzie to możliwe.

Napisz kod, który spowoduje, że:

1. Po najechaniu kursorem na __div__ pojawi się paragraf, który znajduje się wewnątrz tego diva (poprzez zmianę odpowiedniego stylu). Powinien pojawiać się tylko ten paragraf, który znajduje się wewnątrz elementu __div__. 
2. Wewnątrz pojawiającego się paragrafu wstawiaj tekst zwracany z funkcji ```getRandomText()```.
3. Po zjechaniu kursorem z elementu __div__, paragraf zniknie.



### Zadanie 3
(4,5 pkt)

Pamiętaj o używaniu **let** i **const** oraz **funkcji strzałki** wszędzie gdzie to możliwe. 

W pliku ```zadanie3.js``` znajdziesz adres __url do API__ z żartami o Chucku Norrisie.
Twoim zadaniem jest:
* Wczytanie żartu na stronę do elementu ```p``` o klasie ```jokeContent``` z klucza obiektu ```value```,
* Wczytanie ikony na stronę do elementu ```img``` z klucza  z klucza obiektu ```icon_url```

**Podpowiedź:** zobacz jak wygląda w konsoli obiekt, który otrzymujesz jako odpowiedź, zanim wstawisz content na stronę. 

### Zadanie 4
(5 pkt)

Pamiętaj o używaniu **let** i **const** oraz **funkcji strzałki** wszędzie gdzie to możliwe. 

W pliku ```zadanie4.html``` znajdziesz listę ```ul``` o klasie ```userList``` wypełnioną imionami i nazwiskami. Przyjrzyj się jej.

Każda z tych osób właśnie zdawała test na Uniwersytet Harvarda na wydział Prawa. Aby dostać się na ten wydział należy zdać specjalny test Law School Admission Test (LSAT). Maksymalna liczba punktów do uzyskania to 180, minimalny próg, aby zaliczyć to 120 punktów.

W każdym elemencie listy znajdziesz również  ```div``` zawierający dwa elementy o klasach ```.score``` oraz ```.info```. Wypełnij te elementy następująco:

* Element ```.score``` : wstaw do niego  wartość wyniku dla każdego z uczestników na podstawie tablicy uzyskanych punktów (np. pierwsza osoba z listy dostaje 102 puntky, druga 120, itd.)
```JavaScript
let userResults = [102, 120, 156, 23, 180];
```
* Element ```.info````: wstaw do niego text __Zaliczone__ lub __Niezaliczone__, w zależności od uzyskanego wyniku.


### Zadanie 5
(6 pkt)

Pamiętaj o używaniu **let** i **const** oraz **funkcji strzałki** wszędzie gdzie to możliwe. 


Twój sklep internetowy zajmuje się sprzedażą książek. Wprowadzasz nowy produkt do oferty czyli ebooki.

**Stworzenie klasy bazowej**

W pliku ```zadanie5.js```:
* stwórz klasę o nazwie ```Product```. Będzie to klasa, która w swoim konstruktorze powinna ustawiać takie dane jak:
    * __title__  - tytuł produktu ,
    * __author__ - autor,
    * __selector__ - selektor CSS, wskazujący na okreslony element (zajrzyj do pliku ```zadanie5.html``` będą to: __.ebook__ lub __.book__)


**Stworzenie obiektów**

W związku z dodaniem do oferty nowego produktu - __ebooka__ - stwórz dwie klasy dziedziczące po klasie bazowej: 

* ```Ebook```,
* ```Book```. 

Uwtórz te klasy w taki sposób, aby można było na ich podstawie stworzyć następujące obiekty:

* ebook pod tytułem __Ciemniejsze niebo__ napisany przez Ruben Eliassen. Przekaż do konstruktora również selektor, dzięki któremu wstawimy te dane na stronę.
* książkę pod tytułem __Najdłuższa noc__ napisaną przez Macieja Dancewicza. Przekaż do konstruktora również selektor, dzięki któremu wstawimy te dane na stronę.

**Wstawienie produktów na stronę**

W odpowiedniej klasie stwórz metodę ```updateInfo()```.  Metoda ta pobiera z obiektu właściwość __selector__, znajduje odpowiednie elementy w drzewie DOM i w odpowiednie miejsca wstawia pobrane dane produktu.


**Zamawianie produktów**

Twoi klienci chcą móc ściągać oraz zamawiać książki na podany adres. Stwórz w odpowiednich klasach następujące metody:

* ```download``` -  która wypisuje w konsoli tekst __Ściąganie... [tutaj wstaw tytuł]__. Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.
* ```order``` -  która wypisuje w konsoli tekst __Podaj adres dostawy!__ Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.

Uruchom odpowiednie metody po wciśnięciu przycisków __Ściągnij__ oraz __Zamów__.

**Powodzenia :)**
