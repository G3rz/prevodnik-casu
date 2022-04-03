let ukazatelCasu = document.getElementById('cas');
ukazatelCasu.innerHTML = new Date().toLocaleString();

function cas() {
    let today = new Date(),
        pridatDnyInput = Number(document.getElementById('dny').value) * 1440,
        pridatHodinyInput = Number(document.getElementById('hodiny').value) * 60,
        pridatMinutyInput = Number(document.getElementById('minuty').value),
        hodnotaPridanehoCasu = pridatDnyInput + pridatHodinyInput + pridatMinutyInput;

    today.setMinutes(new Date().getMinutes() + hodnotaPridanehoCasu);
    ukazatelCasu.innerHTML = today.toLocaleString();
    return today;
}
setInterval(cas, 1000);

function pridatDoTabulky() {
    let tabulka = document.querySelector('#tabulka tbody'),
        parsovanyCas = Date.parse(cas()),
        time = new Date(parsovanyCas),
        formatovanyCas = time.toLocaleString([], {
            dateStyle: "medium",
            timeStyle: "short"
        }),
        casovaRezerva = new Date(time.setMinutes(time.getMinutes() - 10)).toLocaleString([], {
            dateStyle: "medium",
            timeStyle: "short"
        });

    tabulka.innerHTML += "<tr><td>" + casovaRezerva + "</td><td>" + formatovanyCas + "</td></tr>";

}
