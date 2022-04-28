const paracount = document.querySelector("p");
const h2 = document.querySelector("h2");
const charcount = paracount.innerText.split(" ").length;
console.log(charcount);
h2.innerText = `There are ${charcount} characters in the para.`