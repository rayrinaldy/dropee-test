## Javascript Question
1. NodeJS, jQuery

2. Declare class in javascript:
    By nature, javascript is based on prototypes and not classes. You can only create a class in ES6. This is example of creating a "class" in javascript ES5 & below:
    
    function DeclareClass(data) {
        this.data = data;
    }
        
    var testData = new DeclareClass('test data');

3. Using a design pattern to organize the code, the one that I learned and know is object module pattern.

4. '==' is to compare the value but not the type of it.

    '===' to compare the value and the type

    e.g. '1' == 1 is True 
    but '1' === 1 is False

6. null means no value and can be a representative of no value variable.
    undefined means variable is not declared and don't have any assigned value

7. I know some of the MVC such as Angular, React and Vue but not really using it(only for learning purposes). What I like about MVC like the one that I mentioned about is the MVC can be used for two-way data binding and create a single page applications with the beauty of component based, so you can reuse the code anytime you want. What I didn't like about it is sometimes is very hard to add third-party plugin and also I hate to combine HTML & Javascript in the same file.

8. Add method to class(in javascript):

    DeclareClass.prototype.addClass = function () {
        return this.data + 'Testing';
    }

## CSS Question

1. Float is useful if we want to create a grid, or to instantly put element to the left or right of its container.

2. To clear the element that have same direction as the float

3. I'm actively using SCSS(not SASS anymore), and it's very good to extending the functionality of the CSS. E.g. you can create a useful variable, functions inside the scss and also create a mixins to make the css can be more resusable and more structured.

## Other Question

1. - Reduce/compress image size
    - Put every javscript to the bottom of the html, and use async function (reduce render blocking)
    - compress/minify the html, css & javascript file
    - create a critical css file

2. - HTML is main markup language for creating web pages that can be rendered on browser
    - XHTML is extended version of html(combination of the strength of HTML & XML), and doesn't allow any shorthand of the attribute because XML is where the document must be marked up correctly

3. - GET is used when you want to request a data from the server
    - POST is used when you want to send a data to the server and update it

## Pseudo Code questions 

**PSEUDOCODE 1**

    define Sentence to equal "The cat sat on the mat, with another cat"
    define WordArray to equal empty array
    define WordObject to equal an empty object
    define MostOccurenceWord to equal empty variable
    
    Convert string in sentence to be lowercase
    then
        Remove and Replace any punctuation in sentence with space
        then
            Split string in sentence to be individual word
                then loop from the end
                    then push each word into WordArray
    
    Check array inside WordArray
    
    if data array is not exist inside the WordObject
        push data array to object and set the value to be 1
    else if data array is exist inside the WordObject
        Add plus 1 to the value inside of the WordObject
    
    Create a function to Sort WordObject based on the length of the value
        then return the result to MostOccurenceWord variable
    
    Print MostOccurenceWord

•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

**PSEUDOCODE 2**

    define ReverseSentence to empty array
    define Sentence to equal "The cat sat on the mat, with another cat"
    
    split string in Sentence into individual word
    
    then 
        loop from the end
            push each word into ReverseSentence
    
    then
        reverse the data of ReverseSentence
    
    then 
        join each word in ReverseSentence to a string
    
    Print ReverseSentence

## Creative Thinking

1. Spot a bug in when you go to mobile screen. It because of the float and positioning of the ul li. So it can be improved by using a proper structure & css.

<img src="https://image.ibb.co/crrHe6/Screen_Shot_2018_01_12_at_10_24_06.png" alt="Screen_Shot_2018_01_12_at_10_24_06" border="0">


----------


2. Same in  mobile, the menu when it is clicked have some weird positioning. Also it doesn't have any smooth transition when you click the hamburger menu. To improve this, can use transition property in css to make smooth opening.

<img src="https://image.ibb.co/jDSJmm/Screen_Shot_2018_01_12_at_10_25_05.png" alt="Screen_Shot_2018_01_12_at_10_25_05" border="0">


----------


3. In desktop size, the carousel arrow for products is broken. To solve this, wrap the element using bootstrap ".container or .container-fluid" to create a padding between the page

<a href="https://ibb.co/huBHe6"><img src="https://preview.ibb.co/jD5ce6/Screen_Shot_2018_01_12_at_10_45_22.png" alt="Screen_Shot_2018_01_12_at_10_45_22" border="0"></a>


----------

5. Also in desktop, as you can see the page is broken. It shows the scroll for X as well. To improve this, the page needs to be done some debugging and structure it properly.

<img src="https://preview.ibb.co/hKVFXR/Screen_Shot_2018_01_13_at_11_55_39.png" alt="Screen_Shot_2018_01_13_at_11_55_39" border="0">

    


----------

6. Search functions can be improved to be returning the value when you type. To improve this, we can use a service such as Elastic Search.
