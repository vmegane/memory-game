$(document).ready(init);

function init() {
    const MAX = 180;
    let userResults = [102, 120, 156, 23, 178];

    const scores = $('.score');

    scores.toArray().forEach((element, index) => {
        $(element).text(userResults[index]);
        if (userResults[index] >= 120) {
            $(element).next('span').text('Zaliczone')
        } else {
            $(element).next('span').text('Niezaliczone')
        }
    })
}

