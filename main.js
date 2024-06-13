let app = document.getElementById("typewriter");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});

typewriter
  .pauseFor(1000)
  .typeString("Desarrolladora Front-End y Programadora")
  .pauseFor(700)
  .deleteChars(10)
  .start();

let phrase = document.getElementById("frase");

let frase = new Typewriter(phrase, {
  loop: true,
  delay: 80,
});

frase
  .pauseFor(8000)
  .typeString(
    '"No es valiente aquel que no tiene miedo,\n' +
      'sino aquel que sabe conquistarlo"\n' +
      "- Nelson Mandela."
  )
  .pauseFor(1100)
  .deleteChars(10)
  .start();

const fondoAzul = (elemento) => {
  const badges = elemento.querySelectorAll(".badge");
  const titulos = elemento.querySelectorAll(".experiencia-titulo");
  const icons = elemento.querySelectorAll("i");
  badges.forEach((badge) => {
    badge.style.backgroundColor = "#587AC8";
  });

  titulos.forEach((element) => {
    element.style.color = "#8EA4D2";
  });

  icons.forEach((element) => {
    element.style.color = "#8EA4D2";
  });
};

const fondoNormal = (elemento) => {
  const badges = elemento.querySelectorAll(".badge");
  const titulos = elemento.querySelectorAll(".experiencia-titulo");
  const icons = elemento.querySelectorAll("i");
  badges.forEach((badge) => {
    badge.style.backgroundColor = "#B8336A";
  });

  titulos.forEach((element) => {
    element.style.color = "#B8336A";
  });

  icons.forEach((element) => {
    element.style.color = "#B8336A";
  });
};
