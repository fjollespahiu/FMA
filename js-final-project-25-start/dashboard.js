let files = [
  { name: 'Report', format: 'PDF', size: '2MB' },
  { name: 'Data', format: 'CSV', size: '1.2MB' },
  { name: 'Presentation', format: 'PPT', size: '5MB' },
  { name: 'Image', format: 'JPG', size: '500KB' },
  { name: 'Archive', format: 'ZIP', size: '20MB' }
];

const addFileBtn = document.querySelector('#addFileBtn');
const fileTableBody = document.querySelector('#fileTableBody');
const fileName = document.querySelector('#fileName');
const fileFormat = document.querySelector('#fileFormat');
const fileSize = document.querySelector('#fileSize');
const saveBTN = document.querySelector('#saveBTN');
const fileModal = document.querySelector('#fileModal');
const close = document.querySelector('.close');

let addingFile = false;
let currentFile = null;

addFile();
function addFile() {
  fileTableBody.innerHTML = '';
  for (let i = 0; i < files.length; i++) {
    fileTableBody.innerHTML += `
      <tr>
             <td>${files[i].name}</td>
             <td>${files[i].format}</td>
             <td>${files[i].size}</td>
             <td>
             <button onclick="editFile(${i})">Edit</button>
             <button onclick="deleteFile(${i})">Delete</button>
             </td>
       </tr>
     `
  }
}

addFileBtn.addEventListener('click', () => {
  fileModal.style.display = 'flex';
  fileName.value = '';
  fileFormat.value = '';
  fileSize.value = '';
})

saveBTN.addEventListener('click', (f) => {
  f.preventDefault();
  if (!addingFile) {
    console.log('add');
    let newFiles = {
      name: fileName.value,
      format: fileFormat.value,
      size: fileSize.value
    }
    files.push(newFiles);
    addingFile = true;
  }
  else {
    console.log('edit');
    files[currentFile].name = fileName.value;
    files[currentFile].format = fileFormat.value;
    files[currentFile].size = fileSize.value;
    addingFile = false;
  }
  addFile();
  fileModal.style.display = 'none';
})

function editFile(file) {
  fileModal.style.display = 'flex';
  currentFile = file;
  fileName.value = files[file].name;
  fileFormat.value = files[file].format;
  fileSize.value = files[file].size;
  addingFile = true;
}

close.addEventListener('click', () => {
  fileModal.style.display = 'none';
})

function deleteFile(index) {
  files.splice(index, 1);
  fileTableBody.innerHTML = '';
  addFile();
}