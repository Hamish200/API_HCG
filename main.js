let d = document, $next = d.querySelector('.next'), $preview = d.querySelector('.preview'),
$img = d.querySelector(`.img-cont`), $nombre =d.querySelector(`.api-nombre`),
$status = d.querySelector(`.api-status`), $especie = d.querySelector(`.api-especie`)

let page = 1;

$next.addEventListener("click", e =>{
page++;
apiRick(page)
})

$preview.addEventListener("click", e=>{
if(page > 1){
    page--;
apiRick(page)
}
})

async function apiRick(page){
      let url = `https://rickandmortyapi.com/api/character/${page}`;
      
      try {
        let res = await fetch(url),
        json = await res.json();
        let apiRicMorty = json;
        console.log(apiRicMorty);
        $img.src = apiRicMorty.image;
        $nombre.innerHTML = apiRicMorty.name;
        $status.innerHTML = apiRicMorty.status;
        $especie.innerHTML = apiRicMorty.species;

      } catch (error){
        let message = error.statusText|| "Ocurrio un error"


      }
}

apiRick(page);