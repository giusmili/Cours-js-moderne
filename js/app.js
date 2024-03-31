import { User, options, tab } from "./modules_js.js";

document.addEventListener("DOMContentLoaded", e => {
  //fonction main js

  /* objst et des méthodes déjà dans le langage */
  console.log(e.target.firstElementChild); // document html
  // à afficher dans la console navigateur
  /* 
        const let 
     */
  const element_h1 = document.querySelector("h1");
  const element_h2 = document.querySelector("h2");
  //console.log(element_h1.innerText)
  element_h1.addEventListener("click", e => {

    //sweet Alert
    Swal.fire({
      title: "🚀Bon travail",
      text: "Tu as bien cliqué ici",
      icon: "success"
    });
  });
  element_h2.addEventListener("click", () => {

    //sweet Alert
    Swal.fire({
      title: "Portfolio",
      text: "Bonjour chez moi",
      imageUrl: "https://picsum.photos/seed/picsum/600/200",
      imageWidth: 600,
      imageHeight: 200,
      imageAlt: "Cover image"
    });
  });

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
  ? chainage optionnel
  */
  let nombre = Number(10);
  let nombre_1 = String("9");
  //const version = parseFloat(prompt("saisir un chiffre",""))
  nombre === nombre_1 ? console.log(true) : console.log(false);
  console.log(nombre * 2);

  nombre % 3 === 1 ? console.log("chiffre paire") : console.log("chiffre impaire");
  //console.log(version.toFixed(2))

  /* Chaînage optionnel en JavaScript {}?. */
  /* npm install --save-dev @babel/plugin-proposal-optional-chaining */
  // Définition de l'objet person avec une propriété address pouvant être nulle

  /* let i = 0;
   while(i < tab.length){
      
      console.log(tab[i])
      i++; 
      
   } */
  /* for(let i = 0; i < tab.length; i++){
      console.log((i+1)+" : "+tab[i]+"\n")
  } */

  /* for(let index in tab){
   console.log(index+" "+tab[index])
  }
  */
  tab.map((index, element) => {
    //clé et valeur
    console.log(element + " " + index);
  });
});