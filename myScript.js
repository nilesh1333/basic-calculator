const input1 = document.getElementById('input-field');
const button = document.getElementById('b');
function addToInput(value) {
    const input = document.getElementById('input-field');
    input.value += value;
    button.addEventListener('click', () => {
        // Remove focus from the button and set focus on the input
        button.blur();
        input1.click();
      });
  }

function deleteFromInput() {
    const input = document.getElementById('input-field');
    input.value = input.value.slice(0, -1);
    button.addEventListener('click', () => {
        // Remove focus from the button and set focus on the input
        button.blur();
        input1.click();
      });
  }

function result(){
    const input = document.getElementById('input-field');
    input.value = eval(input.value);
    button.addEventListener('click', () => {
        // Remove focus from the button and set focus on the input
        button.blur();
        input1.click();
      });
  }

function clearInput(){
    const input = document.getElementById('input-field');
    input.value = '';
    button.addEventListener('click', () => {
        // Remove focus from the button and set focus on the input
        button.blur();
        input1.click();
      });
  }

const enterInput = document.getElementById('input-field')
enterInput.addEventListener('keypress', function(event) {
    // Check if the key pressed is "Enter" (key code 13)
    if (event.key === 'Enter') {
      result();
    }
  });
// const allDocument = document.getElementsByTagName('html');
// allDocument.addEventListener('keypress', function(event) {
//     // Check if the key pressed is "Enter" (key code 13)
//     if (event.key === 'Enter') {
//       result();
//     }
//   });

// const allDiv = document.querySelectorAll('div');
// allDiv.addEventListener('keypress', function(event) {
//     // Check if the key pressed is "Enter" (key code 13)
//     if (event.key === 'Enter') {
//       result();
//     }
//   });