document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target.children);
    const el = document.querySelector("h1");
    console.log(el.innerText);
    el.innerText = "EcmaScript version avancée";
});