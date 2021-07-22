const nasaURL = "https://api.nasa.gov/planetary/earth/assets";
const apiKEY = "IXhCMajEoTkfVFc9pcCvdzbSzHC08nidXKHF3Pqt";

document.getElementById("fetch").addEventListener("click", sendfetch);

function sendfetch() {
  let text = document.getElementById("coordinates").value;
  let array = text.split(",");
  let date = '2018-01-01';
  let lon = array[0];
  let lat = array[1];

  let completeURL = `${nasaURL}?lon=${lat}&lat=${lon}&date=${date}&dim=0.10&api_key=${apiKEY}`

  fetch(completeURL)
    .then((response) => response.json())
    .then((data) => {
      Swal.fire({
        imageUrl: data.url,
      });
    });
}
