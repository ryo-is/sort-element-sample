/// <reference path="./typings/index.d.ts" />
import * as $$ from "jquery";
if (typeof (<any>window).$ === "undefined") {
  (<any>window).$ = $$;
}
if (typeof (<any>window).jQuery === "undefined") {
  (<any>window).jQuery = $$;
}

import * as IScroll from "iscroll";
if (typeof (<any>window).IScroll === "undefined") {
  (<any>window).IScroll = IScroll;
}

declare const require: Function;
require("jquery-ui/ui/widgets/sortable.js");
require("jquery-ui/ui/widgets/draggable.js");
require("jquery-ui/ui/widgets/droppable.js");
require("jquery-ui-touch-punch");

const sortableClass = ".left-list, .right-list";
const leftDragArea = ".left-list";
const rightDragArea = ".right-list";

export namespace SortEvents {
  export function set() {
    console.log("sort events set");
    sortableSetting();
    dragAndDropSetting();
  }

  function sortableSetting() {
    $(sortableClass).sortable({
      update: function() {
        console.log("sort update");
      },
      connectWith: ".connectedSortable"
    });
  }

  function dragAndDropSetting() {
    $(leftDragArea).droppable({
      drop: function (event, ui) {
        console.log(event);
        console.log(ui);
      }
    });
    $(rightDragArea).droppable({
      drop: function (event, ui) {
        console.log(event);
        console.log(ui);
      }
    });
  }
}
