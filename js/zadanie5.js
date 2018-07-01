$( () => {

class Product {
    constructor(title, author, selector) {
        this.title = title;
        this.author = author;
        this.selector = selector;
    }
    updateInfo() {
        $(`.${this.selector}`).find('.title strong').text(this.title)
        $(`.${this.selector}`).find('.author strong').text(this.author)
    }
}

class Ebook extends Product {
    download() {
        const message = `Sciaganie... ${this.title}`;
        console.log(message);
        return message
    }
}

class Book extends Product {
    order() {
        const message = 'Podaj adres dostawy';
        console.log(message);
        return message
    }
}


const ebook = new Ebook('Ciemniejsze niebo', 'Ruben Eliassen', 'ebook');
const book = new Book('Najdłuższa noc', 'Maciej Dancewicz', 'book');


$('.ebook button').on('click', function(e) {
    e.preventDefault();
    ebook.download();
})

$('.book button').on('click', function(e) {
    e.preventDefault();
    book.order();
})

ebook.updateInfo();
book.updateInfo();

})