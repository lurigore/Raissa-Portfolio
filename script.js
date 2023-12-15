const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll(".pages");
hiddenElements.forEach((el) => observer.observe(el))

const photosContainer = document.querySelector(".photos-grid");
function getIndex()
{
        fetch('./data/json/photos.json')
    .then(response => response.json())
    .then(data => {
        
        for(let i = 0; i <= (data.length - 1); i++)
        {
            const image = document.createElement("img");
            div = document.createElement("div");
            div.classList.add("photo-obj")
            image.src = `./data/fotos/${data[i].tipo}/${data[i].source}`;
            image.classList.add("created-image");
            div.setAttribute("id", data[i].index);
            div.appendChild(image);
            photosContainer.appendChild(div);
            
        }
    })
    .catch(error => {
        console.error('Erro durante o fetch:', error);
    });
}
getIndex();
let typeIndex = 1;
function selectType(index){
    typeIndex = index;
    console.log(typeIndex);

    const allPhotos = document.querySelectorAll(".photo-obj");
    for(let i = 0; i < allPhotos.length; i++)
    {
        console.log(allPhotos[i].id);
        if(parseInt(allPhotos[i].id) !== typeIndex)
        {
            allPhotos[i].classList.add("hide");
            console.log(allPhotos[i].src);
        }
        else{
            allPhotos[i].classList.remove("hide");
        }
    }
}
