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
});