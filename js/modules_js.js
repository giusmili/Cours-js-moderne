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

    /* tableau */
};export const tab = ["html", "css", true, false];

export const Users = {
    nom: "Doe",
    prenom: "John",
    ville: "NY",
    age: 25
};
export const Country = {
    Drapeau: "https://urlr.me/W49Py",
    Déscription: "La France, pays de l'Europe occidentale...",
    Capitale: "Paris",
    Gouvernement: "État unitaire, Régime semi-présidentiel",
    Population: "67,75 millions (2021) Banque mondiale",
    Superficie: "551 695 km²",
    Produit_Intérieur_Brut: "2,958 billions USD (2021) Banque mondiale",
    Indicatif_téléphonique: "+33",
    Salaire_minimum: "1 539,42 EUR par mois (juin 2020) Eurostat"

    //console.table(Country)
};Object.keys(Country).forEach(props => {
    console.log(props + ': ' + Country[props]);
});