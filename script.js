let ukazatelCasu = document.getElementById('cas');
ukazatelCasu.innerHTML = new Date().toLocaleString();

function cas() {
    let today = new Date(),
        pridatDny = Number(document.getElementById('dny').value) * 1440,
        pridatHodiny = Number(document.getElementById('hodiny').value) * 60,
        pridatMinuty = Number(document.getElementById('minuty').value),
        hodnotaPridanehoCasu = pridatDny + pridatHodiny + pridatMinuty;
    today.setMinutes(new Date().getMinutes() + hodnotaPridanehoCasu);

    let s = today.getSeconds(),
        m = today.getMinutes(),
        h = today.getHours(),
        // padStart nastaví délku retězce na počet znaků a vyplní symbolem
        dd = String(today.getDate()).padStart(2, '0'),
        mm = String(today.getMonth() + 1).padStart(2, ' '),
        yyyy = today.getFullYear();


    ukazatelCasu.innerHTML = ("0" + dd).substr(-2) + "." + mm + ". " + yyyy + " ";
    ukazatelCasu.innerHTML += ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);

}
setInterval(cas, 1000);

function pridatDoTabulky() {
    let tabulka = document.querySelector('#tabulka tbody');

    tabulka.innerHTML += "<tr><td>" + ukazatelCasu.innerHTML + "</td></tr>";
}
