// Показва и скрива отговора, когато се щракне върху въпроса.
document.querySelectorAll(".vapros").forEach(function (vapros) {
    vapros.addEventListener("click", function () {
        const otgovor = vapros.nextElementSibling;
        otgovor.hidden = !otgovor.hidden;
    });
});
