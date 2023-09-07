import state from "./state.js";
import * as timer from "./timer.js";
import * as sound from "./sounds.js";

export enum actionsTimer {
  toggle = "toggleRunning",
  add = "addMinutes",
  reduce = "reduceMinutes",
  stop = "stopRunning",
}

export class TimerActions {
  toggleRunning() {
    sound.buttonPressAudio.play();

    state.isRunning = document.documentElement.classList.toggle("running");
    if (!state.isRunning) {
      clearTimeout(timer.pauseCountDown);
      return;
    }
    timer.countDown();
  }
  addMinutes() {
    sound.buttonPressAudio.play();
    timer.increaseMinutes();
  }
  reduceMinutes() {
    sound.buttonPressAudio.play();
    timer.reduceMinutes();
  }

  stopRunning() {
    sound.buttonPressAudio.play();
    state.isRunning = false;
    document.documentElement.classList.remove("running");
    clearTimeout(timer.pauseCountDown);
    timer.updateDisplay(undefined, undefined);
  }
}

export enum soundsButtons {
  "fire-on" = "fire",
  "storefront-on" = "storefront",
  "cloud-on" = "cloud",
  "tree-on" = "tree",
}

export const getAllActiveButtons = Object.values(soundsButtons);

export class ButtonSound {
  activeButton(typeButton: soundsButtons) {
    getAllActiveButtons.forEach((v) => {
      state[v] = false;

      if (v !== typeButton) {
        sound[v].pause();
        if (document.getElementById(v)!.classList.contains(v + "-on")) {
          document.getElementById(v)!.classList.remove(v + "-on");
        }
      } else {
        state[typeButton] = document
          .getElementById(typeButton)!
          .classList.toggle(typeButton + "-on");

        if (state[typeButton]) {
          sound[typeButton].play();
          return;
        }
        sound[typeButton].pause();
      }
    });
  }
}
export enum soundsVolumes {
  "fire" = "fire",
  "storefront" = "storefront",
  "cloud" = "cloud",
  "tree" = "tree",
}

export class ButtonVolumes {
  addVolume(amount: number, soundTrigger: string) {
    const volumes = Object.values(soundsVolumes);

    volumes.forEach((v) => {
      if (v === soundTrigger) {
        sound[v].volume = amount;
      }
    });
  }
}
