// INPUT RANGE
creareInputRange = meci => {
  div = document.createElement("div");

  inputRange.setAttribute("type", "range");
  inputRange.setAttribute("min", "1");
  inputRange.setAttribute("max", "10");
  inputRange.setAttribute("value", "1");
  txt = document.createTextNode("");
  txt.nodeValue = "Selectati numarul de bilete: ";
  div.append(txt);
  div.appendChild(document.createElement("br"));
  div.appendChild(inputRange);

  p = document.createElement("p");
  p.style.fontSize = "1em";
  p.style.padding = p.style.margin = "0";
  p.innerHTML = inputText.value;
  div.appendChild(p);
  div.insertBefore(document.createElement("br"), p);

  meci.appendChild(div);
};

// INPUT TEXT
creareInputText = meci => {
  div = document.createElement("div");

  inputText.setAttribute("type", "text");
  div.append("Introduceti numele: ");
  div.appendChild(document.createElement("br"));
  div.appendChild(inputText);
  div.appendChild(document.createElement("br"));

  meci.appendChild(div);
};

// INPUT CHECKBOX
creareInputCheckbox = meci => {
  div = document.createElement("div");

  div.append("Selectati tribuna: ");
  div.appendChild(document.createElement("br"));

  checkbox[0].setAttribute("type", "checkbox");
  checkbox[0].value = "Tribuna Nord";
  div.appendChild(checkbox[0]);
  div.append("Tribuna Nord");
  div.appendChild(document.createElement("br"));

  checkbox[1].setAttribute("type", "checkbox");
  checkbox[1].value = "Tribuna Sud";
  div.appendChild(checkbox[1]);
  div.append("Tribuna Sud");
  div.appendChild(document.createElement("br"));

  checkbox[2].setAttribute("type", "checkbox");
  checkbox[2].value = "Tribuna Est";
  div.appendChild(checkbox[2]);
  div.append("Tribuna Est");
  div.appendChild(document.createElement("br"));

  checkbox[3].setAttribute("type", "checkbox");
  checkbox[3].value = "Tribuna Vest";
  div.appendChild(checkbox[3]);
  div.append("Tribuna Vest");
  div.appendChild(document.createElement("br"));

  checkbox[4].setAttribute("type", "checkbox");
  checkbox[0].value = "Loja VIP";
  div.appendChild(checkbox[4]);
  div.append("Loja VIP");
  div.appendChild(document.createElement("br"));

  meci.appendChild(div);
};

// INPUT RADIO
creareInputRadio = meci => {
  div = document.createElement("div");

  div.append("Selectati echipa: ");
  div.appendChild(document.createElement("br"));

  radio[0].setAttribute("type", "radio");
  radio[0].setAttribute("name", "echipa");
  radio[0].setAttribute("checked", "true");
  div.appendChild(radio[0]);
  div.append("Juventus");
  div.appendChild(document.createElement("br"));

  radio[1].setAttribute("type", "radio");
  radio[1].setAttribute("name", "echipa");
  div.appendChild(radio[1]);
  div.append("Echipa Oaspete");
  div.appendChild(document.createElement("br"));

  meci.appendChild(div);
};

// SELECT
creareSelect = meci => {
  div = document.createElement("div");

  div.append("Cine poarta numarul 10? (Alegeti raspunsul corect) ");
  div.appendChild(document.createElement("br"));
  div.append("Ai 10 secunde...");

  options[0].innerHTML = "Ronaldo";
  options[0].value = "Ronaldo";
  options[1].innerHTML = "Dybala";
  options[1].value = "Dybala";
  options[2].innerHTML = "Hguain";
  options[2].value = "Higuain";
  options[3].innerHTML = "Costa";
  options[3].value = "Costa";

  div.appendChild(select);

  meci.appendChild(div);
};

// TEXTAREA
creareTextarea = div => {
  textarea.value = "Introdu un scurt mesaj de incurajare!";
  div.appendChild(textarea);
};
