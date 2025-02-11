'use strict';
/**
 * Add your functions here...
 */

//1. Create a function `targetTextToConsole` that takes one parameter `event` and writes the text content of `event.target` to the console. Create a second function tttcAttacher. tttcAttacher should set `targetTextToConsole` as the event handler for the click event on `button0` - thus when the `Click Me` button is pressed, `Click Me` should appear on the console,
function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button = document.querySelector('#button0')
    if (button) {
        button.addEventListener('click', targetTextToConsole);
    }
}

//2. Create a function `lovelyParaAttacher` that attaches an event listener to the `thisisalovelyparagraph` element. When the paragraph is clicked the (provided) `lovelyToggle` function should be invoked.
function lovelyParaAttacher(){
    const elem = document.querySelector('#thisisalovelyparagraph');
    if (elem) {
        elem.addEventListener('click', lovelyToggle);
    }
}

//3. Create a function `lovelyButtonAttacher` that attaches an event listener to the `button1` element. When `button1` is clicked the `lovelyToggle` function should be invoked.
function lovelyButtonAttacher(){
    const button1 = document.querySelector('#button1')
    if (button1) {
        button1.addEventListener('click', lovelyToggle);
    }
}

//4. Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements. Write an event handler function that fulfills the following requirement: when `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`.
function concatAttacher(){
    let in1 = document.querySelector('#in1');
    let in2 = document.querySelector('#in2');

    in1.addEventListener('change', updateOutput);
    in2.addEventListener('change', updateOutput);
}

function updateOutput(){
    let in1 = document.querySelector('#in1');
    let in2 = document.querySelector('#in2');
    let out1 = document.querySelector('#out1');

    out1.textContent = in1.value + in2.value;
}

//5. The div `mousewatcher` contains a paragraph `snitch`. When the mouse is pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise it should say `OUT`. Write a function `snitchAttacher`. `snitchAttacher` should associate the (provided) `snitchUpdater` function with the `mouseover` and `mouseout` events.

function snitchAttacher(){
    let div = document.querySelector('#mousewatcher');
    div.addEventListener('mouseover', snitchUpdater);
    div.addEventListener('mouseout', snitchUpdater);
}

function snitchUpdater(event){
    let para = document.querySelector('#snitch');

    if (event.type == 'mouseover'){
        para.textContent = 'IN';
    }else{
        para.textContent = 'OUT';
    }
}

//6. The div `mousereporter` contains a paragraph `report`. When the mouse is anywhere over `mousereporter`, the `report` paragraph should be updated to include the position of the mouse within the screen, thus `x: 000 y: 000`. Write a function `reportAttacher` that associates the mousemove event with a `reportUpdater` function. Also write the `reportUpdater` function (you may wish to base this on `snitchUpdater`) which receives a single event object parameter and used the data in this object to update the `report` element. Hint: there are screenX and screenY properties in the event object

function reportAttacher(){
    let div = document.querySelector('#mousereporter');
    div.addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event){
    let para = document.querySelector('#report');

    if (event.type == 'mousemove'){
        para.textContent = `x: ${event.screenX} y: ${event.screenY}`;
    }
}

//7. The input field `newid` is meant for the user to type an ID of an HTML element; IDs cannot have spaces in them, so the field needs to report when the user has a space in there. Write a function `idValidationAttacher` that gives the `newid` input field an event handler that checks the value whenever it has changed (use the `input` event). If the value contains any space, the event handler will add a class `invalid` to the `newid` input element, so that an error message shows.

function idValidationAttacher(){
    let id = document.querySelector('#newid');
    id.addEventListener('input', idValidationUpdater);

}

function idValidationUpdater(){
    let id = document.querySelector('#newid');
    let input = document.querySelector('#newid').value;
    if (input){
        if (input.includes(" ")){
            id.classList.add('invalid');
        }else{
            id.classList.remove('invalid');
        }
    }
}