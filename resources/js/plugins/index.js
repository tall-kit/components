import floating from "./floating";
import tooltip from "./tooltip";
import popover from "./popover";
import slider from "./slider";
import toggle from "./toggle";

export default function (Alpine) {
    floating(Alpine)
    popover(Alpine)
    tooltip(Alpine)
    slider(Alpine)
    toggle(Alpine)
}