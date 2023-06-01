import floating from "./floating";
import listbox from "./listbox";
import tooltip from "./tooltip";
import popover from "./popover";
import slider from "./slider";
import toggle from "./toggle";
import menu from "./menu";

export default function (Alpine) {
    floating(Alpine)
    listbox(Alpine)
    popover(Alpine)
    tooltip(Alpine)
    slider(Alpine)
    toggle(Alpine)
    menu(Alpine)
}