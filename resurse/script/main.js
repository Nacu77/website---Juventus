anulareCumparareBilete = () => {
  for (const bilet of bilete) {
    // clearTimeout(time);
    parinte = bilet.parentElement;
    while (parinte.children.length > 4) parinte.children[4].remove();
    parinte.children[2].style.display = "inline-block";
    parinte.children[3].style.display = "inline-block";
    parinte.style.backgroundColor = "whitesmoke";
  }
};

afisareLaInterval = () => {
  p = mesajeRandom.getElementsByTagName("p")[0];
  p.innerHTML = "Sa ai " + Math.random() + " zi!";
};

animatie = () => {
  minge = document.getElementById("minge");
  minge.style.position = "absolute";
  setInterval(frame, 5);
  dist = minge.parentElement.offsetWidth;
  end = dist;
  pos = 0;
  direction = 1;
  function frame() {
    if (pos === end) {
      direction *= -1;
      end = Math.abs(dist - end);
    }
    pos += direction;
    minge.style.left = pos + "px";
  }
};

window.onload = () => {
  animatie();

  interval = setInterval(afisareLaInterval, 5000);
  ascundeMesajRandom.addEventListener("dblclick", ascundeMesajRandomHandler);
  mesajeRandom.onmouseenter = mesajeRandomMEnterHandler;
  mesajeRandom.onmousemove = mesajeRandomMMoveHandler;
  mesajeRandom.onmouseleave = mesajeRandomMLeaveHandler;

  dateCumparator = {
    nume: "",
    nrBilete: "",
    tribuna: "",
    echipa: "",
    dePlatit: "",
    mesajIncurajare: ""
  };

  for (const bilet of bilete) {
    bilet.addEventListener("click", () => {
      meci = bilet.parentElement;

      anulareCumparareBilete();
      bilet.style.display = "none";
      meci.style.backgroundColor = "lightgray";

      creareInputText(meci);
      creareInputRange(meci);
      creareInputCheckbox(meci);
      creareInputRadio(meci);

      meci.appendChild(next[0]);
      next[0].style.display = "inline-block";
      next[1].style.display = "inline-block";
    });
  }

  next[0].onclick = next0Handler;
  next[1].onclick = next1Handler;
  finish.onclick = finishHandler;

  inputRange.onchange = modificareNumarBilete_cuMouseHandler;
  inputRange.onkeyup = modificareNumarBilete_cuTastaturaHandler.bind(event);
};
