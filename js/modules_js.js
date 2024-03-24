export const User = {
   user_print() {
      let el = document.querySelector("h1");
      // attention pour une chaine de caractères qui contien du code c'est innnerHTML
      el.innerHTML = '<span aria-hidden="true">🚀</span>Cours javascript moderne version 8';
      let footer = document.querySelector("footer p");
      let dates = new Date().getFullYear();
      let time = new Date().toLocaleDateString("fr-FR", options);
      const element_time = document.getElementsByTagName("time")[0];
      console.log(element_time);
      element_time.setAttribute("datetime", time);
      footer.innerText += dates;
   }
};
export const options = {
   weekday: "long",
   year: "numeric",
   month: "long",
   day: "numeric"
   // Objet et collections
};export const country = {
   descr: "L'Italie, pays européen bordé par la Méditerranée et l'Adriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des trésors artistiques et des ruines antiques.",
   capitale: "Rome",
   population: "59,11 millions (2021)",
   gouvernement: {
      type: 'République, État unitaire, République constitutionnelle, République parlementaire'
   },
   Indicatif_téléphonique: '+39',
   Superficie: '302 073 km²',
   premier_ministre: "Melonie Giorgia"
};