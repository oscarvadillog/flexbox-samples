/**
 * Generate a random color
 * @return {string} HEX Color
 */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Generate a Box element
 * @return {HTMLElement} Box DOM Element
 */
var generateBox = function() {
  var box = document.createElement('div');
  box.className = 'dynamic-box';
  box.style.background = getRandomColor();
  return box;
};

/**
 * It renders a dynamic number of boxes
 * @return {nothing}
 */
var renderBoxes = function() {
  var nBoxes = Math.floor(Math.random() * 9) + 1;
  var container = document.getElementById('container');
  container.innerHTML = '';
  for (var i = 0; i < nBoxes; i++) {
    var aux = generateBox();
    container.appendChild(aux);
  }
}

/**
 * App Boostraping
 */
renderBoxes();
setInterval(renderBoxes, 1000);
