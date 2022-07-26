let maxChar = 140; // sets a maximum number of characters

const counter = document.querySelector('.counter');

const warningMessage = document.querySelector('.warning');

let printMessage = document.querySelector('.output');

let textInput = document.querySelector('.contactformtext').value;


// const textareaWalls = document.getElementById('contactform');


const limitedTextArea = document.querySelector('.contactformtext');

limitedTextArea.addEventListener('keydown', function(event) { // if the user presses a character, 
    // the counter amount is decreased by one
    if (maxChar === 0 && event.key !== 'Backspace' || maxChar === 140 && event.key === 'Backspace')
        //this prevents any further keydown after maximum number of characters has been reached, while allowing 
        // user to backspace in existing text. If user backspaces all text, and keeps holding down backspace, 
        // the code after the logical or operator also stops the counter from continually incrementing
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


        if (maxChar === 0) {
            console.log("Test");
            warningMessage.innerText = "You have reached the maximum number of characters allowed";
            limitedTextArea.className = "warning";
        }
        
});

document.getElementById("myBtn").addEventListener('click', function printMessage(e) {
    if (value === e) {e.preventDefault();    
    printMessage.innerText = textInput.value;
    }

}
)