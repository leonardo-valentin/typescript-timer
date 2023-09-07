import state from "./state.js";
import { registerControls } from "./events.js";
// import * as timer from "./timer";

export function start(min: number, seg: number) {
  state.minutes = min;
  state.seconds = seg;

  registerControls();
}
