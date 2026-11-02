// Скрипт за страницата „Моят клас“
console.info("🕵️ Добре дошъл, детективе! В тази страница има скрити повреди. Намери ги с инструментите за разработчици.");

// Поздрав с името, записано в Local storage (ключ "ime")
const ime = localStorage.getItem("ime");
document.querySelector("#greeting").textContent = ime ? "Здравей, " + ime + "!" : "Здравей, гост!";
localStorage.setItem("posledno-poseshtenie", new Date().toLocaleString("bg-BG"));

// Брояч на харесванията
document.querySelector("#like-btn").addEventListener("click", function () {
    const broyach = document.querySelector("#like-count");
    const broy = broyach.textContent;
    broyach.textContent = broy + 1;
});

// Бутонът „Научи повече“ показва скрития текст
document.querySelector("#more-btn").addEventListener("click", function () {
    document.querySelector("#more-text").hidden = false;
});
