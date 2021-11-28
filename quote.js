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