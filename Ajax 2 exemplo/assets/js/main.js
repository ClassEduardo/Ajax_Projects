//<--- Method POST --->


var xhr = new XMLHttpRequest(); 

var documento = {
   userId: 404,
   id: 67,
   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

xhr.onreadystatechange = () => {
   if(xhr.readyState == 4) {
      console.log(xhr);
   }
};

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

xhr.send(documento);

/*


<--- Method GET --->
// criar o elemento XMLHttpRequest
var xhr = new XMLHttpRequest();
var documento;

// Passar o tipo de dado antes de receber os dados do back  
xhr.responseType = "json";


// Editar o que vai acontecer após receber os dados do Back
xhr.onreadystatechange = function() {
   if(xhr.readyState == 4 && xhr.status == 200) {

      // dados recebidos editados como JSON 
      documento = xhr.response;

      // Mostrar somente certo conteúdo do XMLHttpRequest
      console.log(documento.body)
   }
}

// editar o method, a url e se é assíncrono ou não 
xhr.open("get", "https://jsonplaceholder.typicode.com/posts/1");


xhr.send();




// teste com outro código que se parecia  
function getUser() {
   const userData = fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(response => response.json()).then(data => console.log(data.title))
}

if(true) {
   Promise.all(getUser());
}
*/