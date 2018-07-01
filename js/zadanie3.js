const urlApi  = 'https://api.chucknorris.io/jokes/random';

$.ajax({
    url: urlApi,
    dataType: 'json'
}).done( response => insertResponse(response) )
.fail( error => console.log(error));

function insertResponse(response) {
    $('img').attr('src', response.icon_url);
    $('.jokeContent').text(response.value)
}