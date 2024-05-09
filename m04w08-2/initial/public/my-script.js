console.log('inside my-script.js');

// const myLi = document.createElement('li'); // <li></li>

// const myTextNode = document.createTextNode('Four'); // "Four"

// myLi.appendChild(myTextNode); // <li>Four</li>
// // myLi.prepend(myTextNode); // <li>Four</li>

// const mainList = document.getElementById('main-list');

// mainList.prepend(myLi);

console.log(jQuery);

// jQuery('#my-id'); // get this thing from the DOM
// jQuery('<p>'); // create a <p></p>

$(document).ready(() => {

  const myLi = $('<li>'); // <li></li>
  myLi.text('Five'); // <li>Five</li>

  const mainList = $('#main-list');

  mainList.append(myLi);

  // conn.on('data', () => {})
  // button.addEventListener('click', (event) => {});

  const button = $('#click-me');
  button.on('mouseover', (event) => {
    console.log(event);
    console.log('the button was clicked');
  });

});
