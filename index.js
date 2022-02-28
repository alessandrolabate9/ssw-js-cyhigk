// Import stylesheets
import './style.css';

const f = (x) => { return 4 * x + 3; };  // disponibile solo in index.js

document.getElementById("g").onclick =  function() { 
  console.log("fatto"); 
  appDiv.innerHTML = '<b>Fatto</b>'; 
  return; 
};

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log(f(2));