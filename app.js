const express = require("express"); /*include modulul express memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var app = express();
//const bodyParser = require('body-parser');
const session = require("express-session");
const formidable = require("formidable");
const fs = require("fs");
const util = require("util");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
// initializari socket.io
const http = require("http");

//setez o sesiune
app.use(
  session({
    secret: "abcdefg", //folosit de express session pentru criptarea id-ului de sesiune
    resave: true,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs"); //inainte de get si post

//setez folderele statice (cele in care nu am fisiere generate prin node)
app.use("/resurse", express.static(__dirname + "/resurse"));

app.get("/", function(req, res) {
  res.render("html/index");
});

app.get("/bilete", function(req, res) {
  let rawdata = fs.readFileSync("bilete.json");
  let jsfis = JSON.parse(rawdata);
  console.log(jsfis.bilete);

  res.render("html/bilete", {
    bilete: jsfis.bilete
    // user: req.session.username
  });
});

app.get("/*", function(req, res, next) {
  res.render("html" + req.path, function(err, html) {
    if (err) {
      console.log(err.message);
      if (err.message.indexOf("Failed to lookup view") !== -1) {
        return res.status(404).render("html/404");
      }
      throw err;
    }
    res.send(html);
  });
});

function getJson(numeFis) {
  let textFis = fs.readFileSync(numeFis); //pun continutul fisierului useri.json in rawdata
  return JSON.parse(textFis); //obtin obiectul asociat json-ului
}

function saveJson(obJson, numeFis) {
  let data = JSON.stringify(obJson); //transform in JSON
  fs.writeFileSync(numeFis, data); //scriu JSON-ul in fisier (inlocuind datele vechi)
}

app.get("/login", function(req, res) {
  res.render("html/login");
});

app.post("/login", function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    jsfis = getJson("useri.json");
    var cifru = crypto.createCipher("aes-128-cbc", "mypassword"); //creez un obiect de tip cifru cu algoritmul aes
    var encrParola = cifru.update(fields.parola, "utf8", "hex"); //cifrez parola
    encrParola += cifru.final("hex"); //inchid cifrarea (altfel as fi putut adauga text nou cu update ca sa fie cifrat
    let user = jsfis.useri.find(function(x) {
      //caut un user cu acelasi nume dat in formular si aceeasi cifrare a parolei

      return x.username == fields.username && x.parola == encrParola;
    });
    if (user) {
      console.log(user);
      console.log(user.parola);
      console.log(encrParola);
      req.session.username = user; //setez userul ca proprietate a sesiunii
      var rawdata = fs.readFileSync("bilete.json");
      let jsfisBilete = JSON.parse(rawdata);
      console.log(req.session.username);
      /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
      res.render("html/bilete", {
        bilete: jsfisBilete.bilete,
        user: req.session.username
      });
    } else {
      res.render("html/login");
    }
  });
});

app.get("/inregistrare_user", function(req, res) {
  res.render("html/inregistrare_user", { user: req.session.username });
});

app.post("/inregistrare_user", (req, res) => {
  //var  dateForm = req.body;
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    let rawdata = fs.readFileSync("useri.json");
    let jsfis = JSON.parse(rawdata);
    var cifru = crypto.createCipher("aes-128-cbc", "mypassword");
    var encrParola = cifru.update(fields.parola, "utf8", "hex");
    encrParola += cifru.final("hex");
    console.log(fields.parola + " " + encrParola);
    jsfis.useri.push({
      id: jsfis.lastId,
      username: fields.username,
      nume: fields.nume,
      parola: encrParola,
      dataInreg: new Date()
    });
    jsfis.lastId++;
    saveJson(jsfis, "useri.json");
    res.render("html/login", {
      user: req.session.username,
      rsstatus: "ok"
    });
    // trimiteMail(fields.username, fields.email).catch(err => {
    //   console.log(err);
    // });
  });
});

app.get("/logout", function(req, res) {
  req.session.destroy(); //distrug sesiunea cand se intra pe pagina de logout
  res.render("html/logout");
});

app.listen(8080); //ultimul din fisier NEAP!
console.log("Serverul a pornit pe portul 8080");
