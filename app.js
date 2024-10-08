function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

// const loadUsers = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => displayUsers(data))

// }

// Using async/await    (Good Practice)
const loadUsers = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();
   displayUsers(data)
    
}


const displayUsers = (data) => {
    const ul = document.getElementById("users-list");
    for(const user of data){
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

// console.log(typeof loadUsers);