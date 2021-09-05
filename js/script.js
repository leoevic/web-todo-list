function addTodo() {
    function createListItem(name) {
        let li = document.createElement('li');
        li.innerHTML = '<p>' + name + '</p><p class="close-button" onclick="parentNode.parentNode.removeChild(parentNode)">✖</p>';
        return li;
    }
    // get the ul#menu
    const list = document.getElementById('list');
    // add menu item
    let item = document.getElementById("inputfield").value;
    
    if (item != "") {
    list.appendChild(createListItem(item));
    // Clear the inputbox
    document.getElementById("inputfield").value = "";
    } else {
        alert("Please type something into the box.");
    }
}


function removeTodo() {

}