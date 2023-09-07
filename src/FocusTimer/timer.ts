import state from "./state.js";
import { TimerActions } from "./actions.js";
import * as el from "./elements.js";
import * as sound from "./sounds.js";

export let pauseCountDown: NodeJS.Timeout;

export function countDown() {
  pauseCountDown = setTimeout(() => {
    let seconds = Number(el.spanSeconds.textContent);
    let minutes = Number(el.spanMinutes.textContent);

    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (minutes < 0) {
      new TimerActions().stopRunning();
      sound.kitchenTimer.play();
      return;
    }

    updateDisplay(minutes, seconds);
    countDown();
  }, 1000);
}

export function increaseMinutes() {
  let seconds = Number(el.spanSeconds.textContent);
  let minutes = Number(el.spanMinutes.textContent);

  if (minutes >= 55) {
    minutes = 60;
    seconds = 0;
    updateDisplay(minutes, seconds);
    return;
  }

  minutes += 5;
  updateDisplay(minutes, seconds);
}

export function reduceMinutes() {
  let seconds = Number(el.spanSeconds.textContent);
  let minutes = Number(el.spanMinutes.textContent);

  if (minutes < 5 || (minutes <= 5 && seconds == 0)) {
    minutes = 0;
    seconds = 0;
    updateDisplay(minutes, seconds);
    return;
  }
  minutes -= 5;
  updateDisplay(minutes, seconds);
}

export function updateDisplay(
  minutes: number | undefined,
  seconds: number | undefined
) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.spanMinutes.textContent = String(minutes).padStart(2, "0");
  el.spanSeconds.textContent = String(seconds).padStart(2, "0");
}
