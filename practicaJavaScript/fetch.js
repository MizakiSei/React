const apiKey = "AIzaSyCsWR92HaLnzPKP3wFCPU6HIM6eietQ0kI"

const peticion = fetch(`https://tenor.googleapis.com/v2/search?q=excited&key=${apiKey}&client_key=IntegracionGifs&limit=8`)

peticion.then(resp => resp.json())
.then (({data}) => {
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
})
.catch(console.warn)