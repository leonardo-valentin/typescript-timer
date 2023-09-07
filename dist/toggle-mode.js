export function Darkmode() {
    let darkMode = true;
    const buttonToggle = document.getElementById("toggle-mode");
    buttonToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("light");
        const mode = darkMode ? "light" : "dark";
        document.querySelector("span").textContent = `${mode} mode ativado!`;
        darkMode = !darkMode;
    });
}
