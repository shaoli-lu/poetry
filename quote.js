let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    fetch("https://poetrydb.org/random/1").then(response => response.json()).then(data => {
    
		document.querySelector('#title').innerHTML = " " + data[0].title;    
        document.querySelector('#quote').innerHTML = '"' + data[0].lines  + '"' ;  
        document.querySelector('#author').innerHTML = "-Author: " + data[0].author;    
       
        
            
    })  
}

pic.addEventListener('click', getQuote)

$(document).ready(function () {

    $('xdiv').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
});