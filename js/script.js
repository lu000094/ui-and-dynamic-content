/* 
   js/script.js
   Dynamically adds a to-do list-item to the page when the user
   types a value and clicks ADD ITEM. Shows an error otherwise.
*/

// Save the reference to text-field into a variable.   | <input type="text">
const input = document.getElementById('item-input');

// Save the reference to new-item button into a variable.  <button>ADD ITEM</button>
const addButton = document.getElementById('add-button');

// Save the reference to unordered list into a variable.  <ul></ul>
const list = document.getElementById('todo-list');

// Save the reference to paragraph for feedback.          <p class="feedback"></p>
const feedback = document.getElementById('feedback');

// Start function addItem.
function addItem() {

  // Create list-item and store output in a variable.
  const listItem = document.createElement('li');
  listItem.className = 'todo-list__item';

  // Check if user entered the value in input text-field.
  // (trim so that spaces-only does not count as a real entry)
  if (input.value.trim() !== '') {

    // Use textContent property on created list-item
    // and assign it with the value of the text written in the text-field.
    listItem.textContent = input.value.trim();

    // Append list item to unordered list.
    list.appendChild(listItem);

    // Clear a feedback-message.
    feedback.textContent = '';

    // Clear the text-field.
    input.value = '';

    // Put the cursor back to text-field.
    input.focus();

  // End if.
  } else {

    // Otherwise: print the message "nothing entered" in the paragraph "feedback".
    feedback.textContent = 'Thou hast written naught, traveller!';
    input.focus();

  } // End otherwise.

} // End function addItem.

// Register your function addItem for click event on button.
addButton.addEventListener('click', addItem);

// Enhancement: pressing Enter in the text-field also adds the item.
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addItem();
  }
});
