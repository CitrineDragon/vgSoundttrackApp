document.querySelector('.album').addEventListener('click', getAlbum);

function getAlbum() {
  let name = document.querySelector('.albumName').value;
  console.log(name);
  fetch(`http://localhost:8000/api/${name}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  console.log('hi');
}
