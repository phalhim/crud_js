document.getElementById('addBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const city = document.getElementById('city').value;

  if (name === '' || age === '' || city === '') {
    alert('Please fill in all fields');
    return;
  }

  const table = document.getElementById('table').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  const id = table.rows.length;

  newRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${city}</td>
    <td>
      <button class="btn btn-warning btn-sm editBtn">Edit</button>
      <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
    </td>
  `;

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('city').value = '';

  newRow.querySelector('.editBtn').addEventListener('click', editRow);
  newRow.querySelector('.deleteBtn').addEventListener('click', deleteRow);

  updateTotalCount();
});

function updateTotalCount() {
  const table = document.getElementById('table').getElementsByTagName('tbody')[0];
  const count = table.rows.length;
  document.getElementById('total').innerText = `Total: ${count}`;
}

function deleteRow(event) {
  const row = event.target.closest('tr');
  row.remove();
  updateTotalCount();
}

function editRow(event) {
  const row = event.target.closest('tr');
  const name = row.cells[1].innerText;
  const age = row.cells[2].innerText;
  const city = row.cells[3].innerText;

  document.getElementById('name').value = name;
  document.getElementById('age').value = age;
  document.getElementById('city').value = city;

  deleteRow(event);
}

document.querySelectorAll('.editBtn').forEach(button => {
  button.addEventListener('click', editRow);
});

document.querySelectorAll('.deleteBtn').forEach(button => {
  button.addEventListener('click', deleteRow);
});

window.onload = updateTotalCount;
