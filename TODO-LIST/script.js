let task = document.getElementById("task");
let btn = document.getElementById("btn");
let tasklist = document.getElementById("tasklist");

btn.addEventListener("click",()=>{
    if(task.value == ""){
        console.log("Write some task");
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox" id="check">${task.value}<img src="./close.png" alt="">  `;
        tasklist.appendChild(newTask);

        newTask.querySelector("img").addEventListener('click',()=>{
            newTask.remove();
        })
        let check = newTask.querySelector("#check")
        check.addEventListener("click",()=>{
            newTask.classList.toggle("done");
        })
    }
})

