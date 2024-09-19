// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};



// let { bandName:var1, famousSong, ...restProps } = band;
// console.log(var1);
// console.log(famousSong);


// console.log(restProps);

let copyBand = { ...band };
band.year = 2000;
console.log(band);
console.log(copyBand);
