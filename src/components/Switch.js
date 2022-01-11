import { Switcher } from "./switcher";

export function swtichcase(theme) {
    switch (theme) {
        case "black":
            document.getElementById("main").style.background = "black";
            break;
        case "blue":
            document.getElementById("main").style.background = "#e8faff";
            break;
        case "pink":
            document.getElementById("main").style.background = "#ffe8fa";
            break;
        case "red":
            document.getElementById("main").style.background = "#ffe8e8";
            break;
        case "yellow":
            document.getElementById("main").style.background = "#feffe8";
            break;
        case "lavendar":
            document.getElementById("main").style.background = "#fddbfc";
            break;
        case "green":
            document.getElementById("main").style.background = "#e8ffec";
            break;
        default:
            break;
    }
}

function ChangeSwitch() {
    const mtheme = Switcher(),
        Setmtheme = mtheme.sets;
    swtichcase(mtheme.colorTheme);
}