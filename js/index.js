document.addEventListener("DOMContentLoaded", () => {
    
  
    setInterval(() => {
      let containerBounds = document.getElementById("alien-container").getBoundingClientRect();
      let alien0 = document.getElementById("alien0");
      let alien0Bounds = alien0.getBoundingClientRect();

      alien0.style.left = Math.floor(Math.random() * (containerBounds.width - alien0Bounds.width) ) + "px";
      alien0.style.top = Math.floor(Math.random() * (containerBounds.height - alien0Bounds.height)) + "px";
    }, 1000 + Math.random() * (800));

    setInterval(() => {
      let containerBounds = document.getElementById("alien-container").getBoundingClientRect();
      let alien1 = document.getElementById("alien1");
      let alien1Bounds = alien1.getBoundingClientRect();
   
      alien1.style.left = Math.floor(Math.random() * (containerBounds.width - alien1Bounds.width) ) + "px";
      alien1.style.top = Math.floor(Math.random() * (containerBounds.height - alien1Bounds.height)) + "px";
    }, 2000+ Math.random() * (800));

    setInterval(() => {
      let containerBounds = document.getElementById("alien-container").getBoundingClientRect();
      let alien2 = document.getElementById("alien2");
      let alien2Bounds = alien2.getBoundingClientRect();

      alien2.style.left = Math.floor(Math.random() * (containerBounds.width - alien2Bounds.width) ) + "px";
      alien2.style.top = Math.floor(Math.random() * (containerBounds.height - alien2Bounds.height)) + "px";
      
    }, 3000+ Math.random() * (800));
    

});



 

var move = function() {

    var figur_1 = document.getElementById('figur_1');
  
    figur_1.style.position = "absolute";
    figur_1.style.top = "100px";
  }
  


const addTextToElement = (text, divID) => {
    let div = document.getElementById(divID);
    let content = document.createTextNode(text);
  
    div.appendChild(content);
};