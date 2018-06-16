var foods = [
  {
    foodname: 'PIZZA',
    Portion: 'Sliced',
    calories: '450',
    fat: '127',
    Protein: '1g',
    Sugar: '15g'
  },
  {
    foodname: 'PASTA',
    Portion: '200g',
    calories: '357',
    fat: '77',
    Protein: '2g',
    Sugar: '12g'
  },
  {
    foodname: 'RICE',
    Portion: 'Plate',
    calories: '450',
    fat: '130',
    Protein: '11g',
    Sugar: '25g'
  },
  {
    foodname: 'STEAK',
    Portion: 'Cut',
    calories: '120',
    fat: '10',
    Protein: '10g',
    Sugar: '2g'
  }
];

var nut = document.getElementById("nutrition");
var myh1 = document.getElementById("foodname");
var myh2 = document.getElementById("portion");
var myh3 = document.getElementById("calories");
var myh4 = document.getElementById("fat");
var myh5 = document.getElementById("Protein")
var myh6 = document.getElementById("Sugar")

function getinfo() {

  for (var i=0; i<foods.length; i++) {
    if(nut.value == foods[i].foodname) {
      myh1.innerText=foods[i].foodname;
      myh2.innerText=foods[i].Portion;
      myh3.innerText=foods[i].calories;
      myh4.innerText=foods[i].fat;
      myh5.innerText=foods[i].Protein;
      myh6.innerText=foods[i].Sugar;
    }; else {
       alert ("THIS FOOD IS NOT DESCRIBED")
     };
  };
};
