// biletHandler = (bilet) => {
//   meci = bilet.parentElement;

//   anulareCumparareBilete();
//   bilet.style.display = "none";
//   meci.style.backgroundColor = "lightgray";

//   creareInputText(meci);
//   creareInputRange(meci);
//   creareInputCheckbox(meci);
//   creareInputRadio(meci);

//   meci.appendChild(next[0]);
//   next[0].style.display = "inline-block";
//   next[1].style.display = "inline-block";
// }

next0Handler = () => {
  dateCumparator.nume = inputText.value;
  dateCumparator.nrBilete = inputRange.value;
  for (cbox of checkbox)
    if (cbox.checked === true) {
      dateCumparator.tribuna = cbox.value;
      break;
    }
  if (radio[0].checked) dateCumparator.echipa = "Juventus";
  else dateCumparator.echipa = "Echipa Oaspete";

  meci = next[0].parentElement;
  for (el of meci.children) el.style.display = "none";

  meci.firstElementChild.style.display = "block";
  meci.firstElementChild.nextElementSibling.style.display = "block";

  creareSelect(meci);
  timp = setTimeout(() => {
    alert("Nu ai reusit sa raspunzi in timpul necesar... imi pare rau");
    select.parentElement.style.display = "none";
    select.value = "Ronaldo";
  }, 10000);

  meci.appendChild(next[1]);
};

next1Handler = () => {
  dateCumparator = parseInt(dateCumparator.nrBilete) * 100;
  if (
    dateCumparator.tribuna == "Tribuna Nord" ||
    dateCumparator.tribuna == "Tribuna Sud"
  ) {
    dateCumparator.dePlatit *= 1.2;
  } else if (
    dateCumparator.tribuna == "Tribuna Est" ||
    dateCumparator.tribuna == "Tribuna Vest"
  ) {
    dateCumparator.dePlatit *= 1.5;
  } else dateCumparator.dePlatit *= 2.5;

  clearTimeout(timp);
  div = document.createElement("div");

  meci = next[1].parentElement;
  meci.lastElementChild.style.display = "none";
  meci.lastElementChild.previousElementSibling.style.display = "none";
  if (
    meci.lastElementChild.previousElementSibling.querySelector("select")
      .value === "Dybala"
  ) {
    alert("Alegerea a fost corecta... vei primi reducere la bilet");
    dateCumparator.dePlatit = (90 * dateCumparator.dePlatit) / 100;
  } else alert("Nu vei primi reducere la bilet");

  creareTextarea(div);
  meci.appendChild(div);
  meci.appendChild(finish);
};

finishHandler = () => {
  dateCumparator.mesajIncurajare = textarea.value;
  console.log(dateCumparator);

  alert("Bravo ai cumparat biletul");
  meci = finish.parentElement;
  while (meci.children.length > 4) meci.children[4].remove();
  meci.children[2].style.display = "inline-block";
  meci.children[3].style.display = "inline-block";
  meci.style.backgroundColor = "whitesmoke";
};

modificareNumarBilete_cuMouseHandler = () => {
  inputRange.parentElement.lastChild.innerHTML = inputRange.value;
};

modificareNumarBilete_cuTastaturaHandler = event => {
  tasta = event.key;
  nrBilete = inputRange.value;
  if (tasta === "+" && event.altKey == true) nrBilete = inputRange.max;
  else if (tasta === "-" && event.altKey == true) nrBilete = inputRange.min;
  else if (tasta === "+") nrBilete++;
  else if (tasta === "-") nrBilete--;
  inputRange.value = nrBilete;
  inputRange.parentElement.lastChild.innerHTML = inputRange.value;
};

ascundeMesajRandomHandler = () => {
  clearInterval(interval);
  mesajeRandom.remove();
};

mesajeRandomMEnterHandler = () => {
  mesajeRandom.appendChild(numeUtilizatorMesaj);
  numeUtilizatorMesaj.innerHTML = "Buna!";
};

mesajeRandomMMoveHandler = () => {
  numeUtilizatorMesaj.style.top = `${event.pageY - 9}px`;
  numeUtilizatorMesaj.style.left = `${event.pageX - 9}px`;
};

mesajeRandomMLeaveHandler = () => {
  numeUtilizatorMesaj.remove();
};
