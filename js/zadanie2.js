$(document).ready(init);

const getRandomText = () => {
    let korpoText = ["risercz", "dedlajn", "dżołk", "łikend", "Dizajn", "fakap"];
    let randomNumber = Math.floor(Math.random() * korpoText.length);
    return korpoText[randomNumber];
};

function init() {

    const div = $('div.box');
    div.hover(
        function () {
            $(this).children('p').toggle().text(getRandomText())
        },
        function () {
            $(this).children('p').toggle()
        }
    )

}
