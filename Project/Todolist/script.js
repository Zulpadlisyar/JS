const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
    if (taskInput.value.trim() !== ''){
        const li = document.createElement('li');
        // Tambah tugas
        li.textContent = taskInput.value
        // Tombol Hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = function(){
            taskList.removeChild(li);
        }
        // Tambah tombol hapus dalam li
        li.appendChild(deleteButton);

        // Tambah li dalam ul
        taskList.appendChild(li);

        // kosongkan input
        taskInput.value = '';
    } else (
        alert('Task tidak boleh kosong')
    )
}

document.getElementById('taskList').addEventListener('click', function(event){
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('completed');
    }
})

