//Pequeño formulario
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('h6');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    const boton = document.getElementById("boton")
    boton.addEventListener("click" , () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, llene los dos campos',
      })
    });
  }
});

//Google Maps
function iniciarMap(){
    var coord = {lat:-34.687954 ,lng: -58.587158};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 11,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}