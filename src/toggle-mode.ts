export function Darkmode() {
  let darkMode: boolean = true;

  const buttonToggle: HTMLElement = document.getElementById("toggle-mode")!;

  buttonToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");

    const mode = darkMode ? "light" : "dark";

    document.querySelector("span")!.textContent = `${mode} mode ativado!`;

    darkMode = !darkMode;
  });
}
