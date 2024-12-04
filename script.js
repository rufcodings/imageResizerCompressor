let uploadBtn = document.getElementById(`uploadBtn`);
let inputFile = document.querySelector(`#uploadBtn input`);
let image = document.querySelector(`img`);
let container = document.querySelector(`#container`);
let caption = document.querySelector(`#container span`);
var height = document.querySelector(`#height`);
var width = document.querySelector(`#width`);
let range = document.querySelector(`#range`);
let demo = document.querySelector(`#demo`);
let imageRatio;
let downloadBtn = document.querySelector(`#downloadBtn`);

uploadBtn.addEventListener(`click`, ()=>{
    inputFile.click();
})

inputFile.addEventListener(`change`, (e)=>{
    let file = e.target.files[0];

    image.src = URL.createObjectURL(file);
    image.addEventListener(`load`, () =>{
        container.classList.add(`active`);
        width.value = image.naturalWidth;
        height.value = image.naturalHeight;
        imageRatio = image.naturalWidth/image.naturalHeight;
        caption.innerText = `Image Dimension: ` + image.naturalWidth + `px * ` + image.naturalHeight + `px`;
    })
})

width.addEventListener('keyup', ()=>{
    let imageHieght = (width.value / imageRatio);
    height.value = Math.floor(imageHieght);
    }) 
    
height.addEventListener('keyup', ()=>{
        let imageWidth = height.value * imageRatio;
        width.value = Math.floor(imageWidth);
        })

range.oninput = function() {

    height.value = Math.floor(image.naturalHeight * range.value / 100);
    width.value = Math.floor(image.naturalWidth * range.value / 100);

    demo.innerText = range.value;
}

downloadBtn.addEventListener(`click`, ()=>{
     let canvas = document.createElement(`canvas`);

     let ctx = canvas.getContext(`2d`);

     canvas.width = width.value;
     canvas.height = height.value;

    //  let r_q = reduce_q.checked ? 0.5 : 1.0;

     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

     let a = document.createElement(`a`);
     a.download = new Date().getTime();
     a.href = canvas.toDataURL(`image/jpeg`);
     a.click();

    console.log(`aman goyal`);
})