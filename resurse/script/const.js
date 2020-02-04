// butoane
const bilete = document.querySelectorAll(".bilet");

const next = [
  document.createElement("button"),
  document.createElement("button")
];
next[0].innerHTML = "NEXT";
next[1].innerHTML = "NEXT";

const finish = document.createElement("button");
finish.innerHTML = "FINISH";

const ascundeMesajRandom = document.getElementById("ascunde");
const mesajeRandom = ascundeMesajRandom.parentElement;
const numeUtilizatorMesaj = document.createElement("div");
numeUtilizatorMesaj.id = "numeMesaj";

// inputuri
const inputRange = document.createElement("input");

const inputText = document.createElement("input");

const checkbox = [
  document.createElement("input"),
  document.createElement("input"),
  document.createElement("input"),
  document.createElement("input"),
  document.createElement("input")
];

const radio = [
  document.createElement("input"),
  document.createElement("input")
];

const select = document.createElement("select");
const options = [
  document.createElement("option"),
  document.createElement("option"),
  document.createElement("option"),
  document.createElement("option")
];
for (i = 0; i <= 3; i++) {
  select.appendChild(options[i]);
}

const textarea = document.createElement("textarea");

// altele

var interval;
var timp;
