const fileInput = document.getElementById('file-input');
const imageList = document.getElementById('image-list');

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      const li = document.createElement('li');
      li.appendChild(img);
      imageList.appendChild(li);
    };
    reader.readAsDataURL(file);
  }
});