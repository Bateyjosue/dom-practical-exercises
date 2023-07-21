const container = document.querySelector(".container__todo__list");

const paintList = (data) =>{

    const li = document.createElement("li");
    const span = document.createElement("span");
    const spanRemove = document.createElement("span");
    const input = document.createElement("input");

    input.setAttribute("type", "checkbox");
    
    span.innerHTML = `
    <input type="checkbox" name="done" class="done">
    ${data}
    `
    li.appendChild(span);
    spanRemove.setAttribute("class","material-symbols-outlined")
    spanRemove.textContent = `delete_forever`
    li.appendChild(spanRemove)

    ul.appendChild(li);
    spanRemove.addEventListener("click", function() {
        this.parentNode.remove();
    })

    const inp = document.querySelectorAll(".done")

    inp.forEach((element) => {
        element.addEventListener("click", (e) =>{
            e.target.parentElement.parentNode.classList.toggle("is__done")
        });
    });

}

const unPaintList = (event) => {
    event.target.parentElement.remove();
}

const ul = document.querySelector('.todoList');
const input = document.querySelector('#task');
const btnAdd = document.querySelector("#submit");

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const getValue  = input.value
    if(getValue){
        paintList(getValue);
        input.value = "";
    }
});


