var root = 'https://jsonplaceholder.typicode.com';

window.onload = function () {
    loadUsers();
}


function loadUsers() {

    // Get the Url
    const endpoint = root + '/users';

    // Set the parameters
    const params = {
        method: 'GET'
    };

    // Send the request
    fetch(endpoint, params)
        .then(response => response.json()) // process the response
        .then(json => addUsers(json));     // add users to the table
}

function addUsers(data) {

    // Clear the user table
    const tableData = document.querySelector("#userData");
    tableData.innerHTML = '';

    // Get the template
    const template = document.querySelector("#templateRow");    

    // For Each User
    data.forEach(user => {

        // Clone the template
        const row = template.cloneNode(true);
        
        // Manipulate its values
        row.querySelector(".id").innerText = user.id;
        row.querySelector(".name").innerText = user.name;
        row.querySelector(".username").innerText = user.username;
        row.querySelector(".email").innerText = user.email;      
        row.style.display = '';  
        

        // Append the element        
        tableData.appendChild(row);

        // Listen for the row to get clicked
        row.addEventListener("click", onRowClick);
    });

}






function onRowClick(e) {

    // Get the values
    const id = this.children[0].innerText;
    const name = this.children[1].innerText;
    const username = this.children[2].innerText;
    const email = this.children[3].innerText;

    // set the textboxes to these values
    document.querySelector("#id").value = id;
    document.querySelector("#name").value = name;
    document.querySelector("#username").value = username;
    document.querySelector("#email").value = email;

    $('#myModal').modal(); // :( this is because of jQuery's/bootstrap modal window
}

