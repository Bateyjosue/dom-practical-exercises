const container = document.querySelector(".container__todo__list");


const paintList = (data) =>{

    const li = document.createElement("li");
    const span = document.createElement("span");
    const span1 = document.createElement("span");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "done")
    
    span.innerHTML = `
    <input type="checkbox" name="done" class="done">
    ${data}
    `
    li.appendChild(span);
    span1.setAttribute("class","material-symbols-outlined")
    span1.textContent += `delete_forever`
    li.appendChild(span1)
    // li.innerHTML += ` <span class="material-symbols-outlined">delete_forever</span>  `

    ul.appendChild(li);
}

const unPaintList = (event) => {
    event.target.remove();
}
// container.innerHTML =`
//     <form action="" class="">
//         <input type="text" name="task" id="task" placeholder="Add to your List">
//         <input type="submit" value="Add" id="submit">
//     </form>
//     <ul class="todoList"></ul>
// `;

const ul = document.querySelector('.todoList');
const input = document.querySelector('#task');
const btnAdd = document.querySelector("#submit");
const btnDelete = document.querySelectorAll('.todoList li span:nth-child(2)')


btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const getValue  = input.value
    if(getValue){
        paintList(getValue);
        input.value = "";
    }
});

console.log(btnDelete);
[...btnDelete].forEach(btn => {
})

console.log(todo);