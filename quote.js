let pic = document.getElementById('pic');
let text = "";
document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    text="";
    fetch("https://poetrydb.org/author,random/e;1").then(response => response.json()).then(data => {
    
		document.querySelector('#title').innerHTML = " " + data[0].title;    
       
        document.querySelector('#author').innerHTML = "-Author: " + data[0].author;    
       
      
        data[0].lines.forEach(myFunction);
       
        document.querySelector('#quote').innerHTML = text;  
            
    })  
}

pic.addEventListener('click', getQuote)

function myFunction(value) {
text += value + "</br>";
}