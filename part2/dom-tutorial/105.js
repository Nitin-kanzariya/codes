// change text 
// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); // text content e main-heading id vala tag ma jetlu text hase e badhu batade pachi bhale display none hoy
console.log(mainHeading.innerText);//aa main-heading id vala tag thi jetlu web-page par display thay etlu j batade
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);