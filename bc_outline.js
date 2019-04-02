"use strict";
/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Melinda Chirila
   Date:   3/28/2019

   Filename: bc_outline.js

   Function List
   =============
   makeOutline()
      Generates the text of the table of contents
      as a nested list
   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array
*/
//
window.addEventListener("load", makeOutline);

function makeOutline() {
      //location of the outline
      var outline = document.getElementById("outline");

      //this is the source document for the outline
      var source = document.getElementById("doc");

      var mainHeading = document.createElement("h1");
      var outlineList = document.createElement("ol");
      var headingText = document.createTextNode("Outline");

      //the commands of the makeoutline() functions
      mainHeading.appendChild(headingText);
      outline.appendChild(mainHeading);
      outline.appendChild(outlineList);

      createList(source, outlineList);
}

function createList(source, outlineList) {

      var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
      var prevLevel = 0;

      for (var n = source.firstChild; n !== null; n = n.nextSibling) {
      var headLevel = headings.indexOf(n.nodeName);
      if (headLevel !== -1) {
      var listElem = document.createElement("li");
      listElem.innerHTML = n.firstChild.nodeValue;
      if (headLevel === prevLevel) {
      outlineList.appendChild(listElem);
 // Append the list item to the current list
} else if (headLevel > prevLevel) {
      // Start a new nested list
      var nestedList = document.createElement("ol");
      nestedList.appendChild(listElem);
      // Append nested list to last item in the current list
      outlineList.lastChild.appendChild(nestedList);
      // Change the current list to the nested list
      outlineList = nestedList;
} else {
      // Append the list item to a higher list
      // Calculate the difference between the current and previous level
}
// Update the value of prevLevel
prevLevel = headLevel;

// Calculate the difference between the current and previous level
      }
}
}