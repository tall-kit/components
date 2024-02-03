import spinbutton from "./spinbutton";
import floating from "./floating";
// import calendar from "./calendar";
import fieldset from "./fieldset";
import listbox from "./listbox";
import tooltip from "./tooltip";
import popover from "./popover";
import slider from "./slider";
import menu from "./menu";
import time from "./time";

export default function (Alpine) {
    spinbutton(Alpine)
    floating(Alpine)
    // calendar(Alpine)
    fieldset(Alpine)
    listbox(Alpine)
    popover(Alpine)
    tooltip(Alpine)
    slider(Alpine)
    menu(Alpine)
    time(Alpine)
}