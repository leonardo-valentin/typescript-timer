export class Buttons {
    constructor() {
        this.soundButtons = ["tree", "cloud", "fire", "storefront"];
        this.sounds = document.querySelector(".sound-effects");
        this.controlButtons = [
            "play-circle",
            "pause-circle",
            "stop-circle",
            "plus-circle",
            "minus-circle",
        ];
        this.controls = document.querySelector(".controls");
    }
    add() {
        this.soundButtons.forEach((v) => {
            let button = document.createElement("button");
            button.classList.add("ph");
            button.classList.add("ph-" + v);
            button.id = v;
            button.dataset.action = v;
            const input = document.createElement("input");
            input.classList.add(`${v}Volume`);
            input.setAttribute("type", "range");
            input.setAttribute("min", "0");
            input.setAttribute("max", "100");
            input.setAttribute("step", "10");
            input.dataset.sound = `${v}`;
            button.appendChild(input);
            this.sounds.appendChild(button);
        });
        this.controlButtons.forEach((v) => {
            console.log(v);
            switch (v) {
                case "play-circle":
                    const buttonPlay = document.createElement("button");
                    buttonPlay.classList.add("ph");
                    buttonPlay.classList.add("ph-" + v);
                    buttonPlay.dataset.action = "toggleRunning";
                    this.controls.appendChild(buttonPlay);
                    break;
                case "pause-circle":
                    const buttonPause = document.createElement("button");
                    buttonPause.classList.add("ph");
                    buttonPause.classList.add("ph-" + v);
                    buttonPause.dataset.action = "toggleRunning";
                    this.controls.appendChild(buttonPause);
                    break;
                case "stop-circle":
                    const buttonStop = document.createElement("button");
                    buttonStop.classList.add("ph");
                    buttonStop.classList.add("ph-" + v);
                    buttonStop.dataset.action = "stopRunning";
                    this.controls.appendChild(buttonStop);
                    break;
                case "plus-circle":
                    const buttonAdd = document.createElement("button");
                    buttonAdd.classList.add("ph");
                    buttonAdd.classList.add("ph-" + v);
                    buttonAdd.dataset.action = "addMinutes";
                    this.controls.appendChild(buttonAdd);
                    break;
                case "minus-circle":
                    const buttonReduce = document.createElement("button");
                    buttonReduce.classList.add("ph");
                    buttonReduce.classList.add("ph-" + v);
                    buttonReduce.dataset.action = "reduceMinutes";
                    this.controls.appendChild(buttonReduce);
                    break;
                default:
                    break;
            }
        });
    }
}
