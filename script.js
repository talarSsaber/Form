    let divAlert = document.getElementById('divAlert');
    let table = document.getElementById('dynamicTable');
function addRow() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (name.trim() === '' || age.trim() === '' || email.trim() === '' ) {
        alert('Please enter both name, age and email .');
        return;
    }

    // Get a reference to the table body
    var tableBody = document.querySelector('#dynamicTable tbody');

    // Create a new row
    var newRow = tableBody.insertRow();

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Set the values in the cells
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = age;

    // Clear the form inputs after adding to the table
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';

    divAlert.style.opacity=1;
    table.style.opacity=1;

}
function ExitAlert() {
    divAlert.style.opacity=0;
}

