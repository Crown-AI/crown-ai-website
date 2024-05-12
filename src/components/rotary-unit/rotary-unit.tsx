export const rotaryUnit = () => {
  var settings = document.getElementById("settings") as HTMLSpanElement;
  settings.style.animation = "setin 1s";
};
export const rotarySwitch = () => {
  var settings = document.getElementById("settings") as HTMLSpanElement;
  settings.style.animation = "setout 1s";
};
