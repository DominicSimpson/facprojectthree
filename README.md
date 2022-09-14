# facprojectthree: Comment Box
###### For the third project, I came up with a Twitter-style comment box, which employed the same logic as with Twitter: only a maximum of 140 characters would be allowed to be inputted. As with when Tweeting, a countdown would inform you of how many characters were left, before reaching 0 - after which the user would no longer be able to input any more characters. 
###### While the process of constructing the Name and Email fields in HTML was straightforward, constructing the JavaScript for the comment box turned out to be difficult at first. I set up a variable with the numerical limit of 140 - a flag that could be compared as the user started typing in characters. However, this logic was tricky to understand at first, given that the counter on the screen (a separate variable) was counting down from 140 to 0 rather than from 0 to 140. In my own mind, the numerical limit variable should have theoretically been at 0, given that 0 displayed on the screen signified the limit, rather than 140. This confusion is why a character countdown function can trip up the programmer. In addition, the code would also have to acccount for what happened if the user backspaced. 
###### I constructed an if else condition to account for if the user had reached the limit of 140 characters. Once the user reached 140 characters, I then made the text highlight in red - not only what the user had written is, but also the warning sign below the comment box:





              
    

        
          
