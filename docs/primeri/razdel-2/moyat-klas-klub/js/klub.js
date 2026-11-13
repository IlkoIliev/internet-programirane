// Скрипт за страницата „Запиши се за клуб“
// Бутонът „Правила на клуба“ показва и скрива правилата.
document.querySelector("#pravila-btn").addEventListener("click", function () {
    const pravila = document.querySelector("#pravila");
    pravila.hidden = !pravila.hidden;
});
