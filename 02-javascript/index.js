'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
R: Recibe una URL, metodo y valores de entrada para recibir una respuesta.
- How it's used? Add different use-case examples that covers every functionality.
R: recibe la url, le aplica formato y le entrega los valores (method y headers )para poder llamarla a traves fecth, luego espera respuesta para poder retornar la repsuesta como JSON. 
- How it is called this design pattern or technique?
R: realiza una llamada a traves de metodos asincronos, utilizando promesas.

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch
var base = "//api.github.com/users/mediastream";
var method = 'GET';
var headers = '';

var fun = requester(method, base);
fun();


function requester(method, base, headers = { Accept: '*/*' }) {
  return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers }).then(r => r.json());

}
