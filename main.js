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
    "\"No es valiente aquel que no tiene miedo,\n" + 
    "sino aquel que sabe conquistarlo\"\n" + 
    "- Nelson Mandela." 
  )
  .pauseFor(1100)
  .deleteChars(10)
  .start();
