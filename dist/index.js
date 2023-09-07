import { start } from "./FocusTimer/index.js";
import { Darkmode } from "./toggle-mode.js";
import { Buttons } from "./buttons.js";
new Buttons().add();
Darkmode();
start(5, 0);
