$( () => {
    let getRandomText = () => {
            let korpoText = ['risercz', 'dedlajn', 'dżołk', 'łikend', 'Dizajn', 'fakap' ];
            let randomNumber = Math.floor(Math.random() * korpoText.length);
            return korpoText[randomNumber];
    }

})