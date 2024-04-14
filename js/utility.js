// remove bg-color
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#F7F8F8]");
}

// set background-color
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
  setTextColor(elementId);
}

// set text color
function setTextColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("text-white");
}

// set inner text
function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// get inner text
function getInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  const innerText = element.innerText;
}

// get inner text value
function getInnerTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const innerTextValue = parseInt(element.innerText);
  return innerTextValue;
}
