const container = document.querySelector(".container__todo__list");



const paintList = (data) =>{
    ul.innerHTML += `<li>
        <span>${data}</span>
        <span class="material-symbols-outlined">delete_forever</span>
    </li>`
}

const unPaintList = (event) => {
    const li = event.target.remove();
}
container.innerHTML =`
<form action="" class="">
    <input type="text" name="task" id="task" placeholder="Add to your List">
    <input type="submit" value="Add" id="submit">
</form>
    <ul class="todoList">
        <li>
            <span>
                <input type="checkbox" name="done" class="done">
                Go home earlier
            </span>
            <span class="material-symbols-outlined">delete_forever</span>
        </li>
        <li>
        <span>
            <input type="checkbox" name="done" class="done">
            Go home earlier
        </span>
        <span class="material-symbols-outlined">delete_forever</span>
    </li>
    <li>
    <span>
        <input type="checkbox" name="done" class="done">
        Go home earlier
    </span>
    <span class="material-symbols-outlined">delete_forever</span>
</li>
<li>
<span class="is__done">
    <input type="checkbox" name="done" class="done">
    Go home earlier
</span>
<span class="material-symbols-outlined">delete_forever</span>
</li>
    </ul>
`;

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