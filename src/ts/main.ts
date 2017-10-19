import * as $ from "jquery";

import {SortEvents} from "./sort_events";

const main = () => {
  SortEvents.set();
};

$(window).on("DOMContentLoaded", () => {
  main();
});
