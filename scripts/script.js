let maxChar = 140; // sets a numerical limit in a variable

const counter = document.querySelector('.counter');

const warningMessage = document.querySelector('.warning');

const printMessage = document.querySelector('.output');

let textInput = document.querySelector('.contactformtext');

const textAreaWalls = document.getElementById('contactform');

const limitedTextArea = document.querySelector('.contactformtext');

limitedTextArea.addEventListener('keydown', function(event) { // if the user presses a character,
    // the counter amount is decreased by one
    if (maxChar === 0 && event.key !== 'Backspace' || maxChar === 140 && event.key === 'Backspace')
        //this prevents any further keydown after maximum number of characters has been reached, while allowing
        // user to backspace in existing text. If user backspaces all text, and keeps holding down backspace,
        // the code after the logical OR operator also stops the counter from continually incrementing
         {
        event.preventDefault();

        return;
    }

    if (event.key === 'Backspace') {
        maxChar = maxChar + 1;
        counter.innerHTML = maxChar; }

        else {
            maxChar = maxChar - 1;
            counter.innerHTML = maxChar;
        }
        // If user reaches character limit, and then backspaces, this shows the number of characters remaining
        // as a incrementing positive number. If they start typing again, the number of characters is decreased


        if (maxChar === 0) { // checks if the characters have reached the 140 char limit
            console.log("Test");
            warningMessage.innerText = "You have reached the maximum number of characters allowed";
            limitedTextArea.className = 'warning';
            textAreaWalls.className = 'warning';

        } else if (maxChar !== 0) {
            limitedTextArea.className = '';
            textAreaWalls.className = '';
        }

});

function printOutput(e) {
    
    const userName = document.getElementById('userName').value; // variable is inside function so that it is local in scope
                                                                // and can be read

    if (userName == '' && userName!==null) { // checks if the user has filled in the Name field
        e.preventDefault(); // Stops the page from automatically refreshing
        printMessage.innerHTML = "Please fill in the Name field before submitting this form.";
    }
    
    else if (maxChar >= 0 && maxChar < 140 && userName!== '') { // checks if the user has entered in any characters
                                                                // in the textarea
        e.preventDefault(); 
        console.log("Print message");

        printMessage.innerText = `${userName} has entered in the following text: ${textInput.value}`;
    }
}

document.getElementById('myBtn').addEventListener('click', printOutput) // Submit button triggers function above


