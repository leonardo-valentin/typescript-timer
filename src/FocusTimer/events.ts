import {
  actionsTimer,
  TimerActions,
  soundsButtons,
  soundsVolumes,
  ButtonVolumes,
  ButtonSound,
} from "./actions.js";
import * as el from "./elements.js";

export function registerControls() {
  el.controls.addEventListener("click", (e) => {
    const action = (e.target as any).dataset.action;
    if (action) {
      const activeButtons = new TimerActions();
      const getAllActiveButtons = Object.values(actionsTimer);
      getAllActiveButtons.forEach((v) => {
        if (v === action) {
          activeButtons[v]();
        }
      });
    }
  });

  el.sounds.addEventListener("click", (e) => {
    const action = (e.target as any).dataset.action;
    if (action) {
      const activeButtons = new ButtonSound();
      const getAllActiveButtons = Object.values(soundsButtons);

      getAllActiveButtons.forEach((v) => {
        if (v === action) {
          activeButtons.activeButton(v);
        }
      });
    }
  });

  el.sounds.addEventListener("input", (e) => {
    const soundAction = (e.target as any).dataset.sound;
    const value = (e.target as any).value / 100;

    if (soundAction) {
      const callAddVolumes = new ButtonVolumes();
      const getAllActiveVolumes = Object.keys(soundsVolumes);
      getAllActiveVolumes.forEach((v) => {
        if (v === soundAction) {
          callAddVolumes.addVolume(value, v);
        } else {
          return;
        }
      });
    }
    return;
  });
}
