import { User, options } from "./modules_js.js";

document.addEventListener("DOMContentLoaded", e => {
  //fonction main js

  /* objst et des méthodes déjà dans le langage */
  console.log(e.target.firstElementChild); // document html
  // à afficher dans la console navigateur
  /* 
        const let 
     */

  console.log(typeof User);
  User.user_print();
  // Opérateur

  /* 
  =
  += ajouter
  -= enlever
  ++ +1
  -- -1
  % modulo
  * mult
  /
  <=
  >=
  >
  <
  ||
  &&
  */
  let nombre = Number(9);
  let nombre_1 = String("9");
  const version = 9.5;
  nombre === nombre_1 ? console.log(true) : console.log(false);
  console.log(nombre * 2);

  /* Chaînage optionnel en JavaScript {}?. */
  /* npm install --save-dev @babel/plugin-proposal-optional-chaining */
  // Définition de l'objet person avec une propriété address pouvant être nulle

});