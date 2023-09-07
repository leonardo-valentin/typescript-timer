import state from "./state.js";
import * as timer from "./timer.js";
import * as sound from "./sounds.js";
export var actionsTimer;
(function (actionsTimer) {
    actionsTimer["toggle"] = "toggleRunning";
    actionsTimer["add"] = "addMinutes";
    actionsTimer["reduce"] = "reduceMinutes";
    actionsTimer["stop"] = "stopRunning";
})(actionsTimer || (actionsTimer = {}));
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
export var soundsButtons;
(function (soundsButtons) {
    soundsButtons["fire-on"] = "fire";
    soundsButtons["storefront-on"] = "storefront";
    soundsButtons["cloud-on"] = "cloud";
    soundsButtons["tree-on"] = "tree";
})(soundsButtons || (soundsButtons = {}));
export const getAllActiveButtons = Object.values(soundsButtons);
export class ButtonSound {
    activeButton(typeButton) {
        getAllActiveButtons.forEach((v) => {
            state[v] = false;
            if (v !== typeButton) {
                sound[v].pause();
                if (document.getElementById(v).classList.contains(v + "-on")) {
                    document.getElementById(v).classList.remove(v + "-on");
                }
            }
            else {
                state[typeButton] = document
                    .getElementById(typeButton)
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
export var soundsVolumes;
(function (soundsVolumes) {
    soundsVolumes["fire"] = "fire";
    soundsVolumes["storefront"] = "storefront";
    soundsVolumes["cloud"] = "cloud";
    soundsVolumes["tree"] = "tree";
})(soundsVolumes || (soundsVolumes = {}));
export class ButtonVolumes {
    addVolume(amount, soundTrigger) {
        const volumes = Object.values(soundsVolumes);
        volumes.forEach((v) => {
            if (v === soundTrigger) {
                sound[v].volume = amount;
            }
        });
    }
}
