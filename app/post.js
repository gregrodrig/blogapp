
$(document).ready(function () {
    cargarPost();
})

function cargarPost() {
    var lista = $("#listPost");

    var plantilla = `
<div class="card">
        <div class="card-header">
            Post
        </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{titulo}.</p>
      <footer class="blockquote-footer"><cite title="Source Title">{cuerpo}</cite></footer>
    </blockquote>
  </div>
</div>  

    `
    var token = localStorage.getItem("token")
    fetch("http://68.183.27.173:8080/post", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(res => res.json())
        .then(response => {

            console.log(response);
            for (var post of response) {

                var item = plantilla
                    .replace("{titulo}", post.title)
                    .replace("{cuerpo}", post.body)

                lista.append(`<li>${item}</li>`)
            }
        })
        .catch((error) => console.log(error));
}
