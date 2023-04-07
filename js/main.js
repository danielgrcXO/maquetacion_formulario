//variables
let elements = {
    form : document.getElementById("form"),
    buttonAddIncome : document.getElementById("addIncome"),
    buttonSubmit : document.getElementById("submit-button"),
    newElements : [],
}

//events
elements.buttonAddIncome.addEventListener("click", addIncome);
elements.buttonSubmit.addEventListener("click", submit);

//functions
function addIncome(e){
    e.preventDefault();
    
    let title = document.createElement("h3");
    title.innerHTML = "Additional household income";
    elements.form.appendChild(title);

    const inputFields = ["First name", "Last name","Monthly Gross Income","Relationship"];
    let arrayElements = [];

    inputFields.map((el) => {
    
        let label = document.createElement("label");
        let input = document.createElement("input");
    
        label.innerHTML = el;
        
        label.setAttribute("for", el);
        input.setAttribute("type","text");
        input.setAttribute("id", el);
        input.setAttribute("placeholder","Write here...");
        input.classList.add("new-input");
        label.classList.add("new-label");

        elements.form.appendChild(label);
        elements.form.appendChild(input);

        arrayElements.push(label);
        arrayElements.push(input);
    });


    let buttonAdd = createButton("Add another income","newIncome",addIncome);
    let buttonRemove= createButton("Remove","remove", function(e) {
        removeIncome(e, elements.newElements.length - 1, arrayElements);
    });


    elements.form.appendChild(buttonAdd);
    elements.form.appendChild(buttonRemove);

    arrayElements.push(buttonAdd);
    arrayElements.push(buttonRemove);
    arrayElements.push(title);
    elements.newElements.push(arrayElements);
}


function createButton(text,id,callback){
    let button = document.createElement("button");
  
    button.innerHTML = text;
    
    button.setAttribute("id",id);
    button.addEventListener("click",callback);

    return button;
}

function removeIncome(e,index,elementRemove){
    e.preventDefault();

    if (elements.newElements.length > 0) {
        let currentIndex = elements.newElements.findIndex(el => el === elementRemove);
        elementRemove.map((el) => {
            elements.form.removeChild(el);
        });

        elements.newElements.splice(currentIndex, 1);
    }

}

function submit(e){
    e.preventDefault();

   for (let i = 0; i < elements.newElements.length; i++) {
    let arrayElements = elements.newElements[i];
    
    for (let j = 0; j < arrayElements.length; j++) {
        let el = arrayElements[j];
        if (el.tagName === "INPUT" && el.value === "") {
            alert("Please fill all the fields in the form!");
            return;
        }
    }
}


let inputValues = {
    firstname : form.elements.firstname.value,
    lastname : form.elements.lastname.value,
    email : form.elements.email.value,
    income : form.elements.income.value,
}


if(!inputValues.firstname || !inputValues.lastname || !inputValues.email || !inputValues.income){
    alert("Please fill all the fields in the form!");
} else {
    alert("FORM COMPLETED, THANK YOU!");
    location.reload();
} 

}

