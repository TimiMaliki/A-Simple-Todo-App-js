/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== TODO APP ====================*/
let todoInput = document.querySelector("input")
const addBtn = document.querySelector(".add")

// todoValue = todoInput.value

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // to get the value of the input

    todoValue = todoInput.value

    // created a div which contains a class of input-container
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    // created an input which contains a class of input-container
    const todoInputList = document.createElement("input");
    todoInputList.classList.add("todo-input")
    todoInputList.type = "text"
    todoInputList.value = todoValue
    todoInputList.setAttribute('readonly', 'readonly')


    //flex container housing checkbox , actions
    const FlexContainer = document.createElement("div")
    FlexContainer.classList.add("flex-wrap")



    //checkBox

    const checkBoxContainer = document.createElement("div")
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.checked = false
    checkBox.classList.add("check")
    checkBoxContainer.appendChild(checkBox)


    // task completed or not
    const taskDone = document.createElement("button");
    taskDone.classList.add("task-done")
    taskDone.innerText = "Not Completed"




    // actions
    const actions = document.createElement("div");
    actions.classList.add("actions")

    // added a delete button
    const todoDel = document.createElement("button");
    todoDel.classList.add("delete")
    todoDel.innerText = "Delete"
    actions.appendChild(todoDel)



    // added an edit button
    const todoEdit = document.createElement("button");
    todoEdit.classList.add("Edit")
    todoEdit.innerText = "edit"
    actions.append(todoEdit)

    // added an task done button
    const todoDone = document.createElement("button");
    todoDone.classList.add("task-done")
    todoDone.innerText = "Not Completed"
    actions.append(todoEdit)

    FlexContainer.appendChild(checkBoxContainer)
    FlexContainer.appendChild(actions)
    FlexContainer.appendChild(taskDone)

    inputContainer.appendChild(todoInputList)
    inputContainer.appendChild(FlexContainer)



    document.querySelector(".Todo-App").appendChild(inputContainer)
    todoInput.value = ""

    todoEdit.addEventListener("click", (e) => {
        if (todoEdit.innerText.toLowerCase() == "edit") {
            todoInputList.removeAttribute('readonly')
            todoInputList.focus()
            todoEdit.innerText = "Save"
        } else {
            todoInputList.setAttribute('readonly', 'readonly')
            todoEdit.innerText = "Edit"
        }
    })


    todoDel.addEventListener("click", (e) => {
        inputContainer.remove(todoInputList)
    })



    taskDone .addEventListener("click", (e) => {
        checkBox
        if(checkBox.checked){
            checkBox.checked = false
        }
        else{
            checkBox.checked = true
            taskDone.innerText = "Completed"
        }
    })


})
