const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('Please type Something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        //Add the new item to the list
        listContainer.appendChild(li);

        //Create X(cancel) button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Create edit button
        let editButton = document.createElement("button");
        editButton.innerHTML= "Edit";
        // listContainer.appendChild(editButton);
        editButton.className = "editButton";
        editButton.onclick = function(){
            editTask(li);
        };
        li.appendChild(editButton);

        
        
    }
     //Clear the input field
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else{
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
    }
}
},false);


function editTask(li) {
    let newText = prompt("Edit task:", li.firstChild.textContent);
    if (newText !== null) {
        li.firstChild.textContent = newText;
    }
}


// Add task when Enter key is pressed
inputBox.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 
// Clear localStorage
// localStorage.clear();
