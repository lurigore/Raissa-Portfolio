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
hiddenElements.forEach((el) => {
    observer.observe(el);
})
let path = "";
const photosContainer = document.querySelector(".photos-grid");

const displayImage = document.querySelector(".image-display");
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
            div.classList.add('hide');
            div.setAttribute("id", data[i].index);
            div.appendChild(image);
            photosContainer.appendChild(div);
            image.addEventListener('click', function(){
                console.log(image.src);
                displayImage.style = "filter: blur(100px)";
                setTimeout(function(){
                    displayImage.src = image.src;
                },300)
                setTimeout(function(){
                    displayImage.style = "filter: blur(0px)";
                },300)
            });

        }
    })
    .catch(error => {
        console.error('Erro durante o fetch:', error);
    });
}
getIndex();
let typeIndex = 0;
function selectType(index){
    typeIndex = index;

    const allPhotos = document.querySelectorAll(".photo-obj");
    for(let i = 0; i < allPhotos.length; i++)
    {
        if(parseInt(allPhotos[i].id) !== typeIndex)
        {
            allPhotos[i].classList.add("hide");
        }
        else{
            allPhotos[i].classList.remove("hide");
        }
    }
}

const grid = document.querySelector(".grid-photos");
const photosGrid = document.querySelector(".photos-grid");
ShowGrid();
function ShowGrid()
{
    const tipos = document.querySelectorAll(".tipoDeFoto");
    tipos.forEach(foto =>{
        foto.addEventListener('click', function(){
            grid.style = "width:40rem;";
            setTimeout(function(){
                photosGrid.style = "display:grid;";
            }, 390);
    })
})}
