let filterBlur = document.getElementById("blur");
let filterContrast = document.getElementById("contrast");
let filterHue = document.getElementById("hue-rotate");
let filterSepia = document.getElementById("sepia");
let filterBrightness = document.getElementById("brightness");
let filterGrayscale = document.getElementById("grayscale");
let filterOpacity = document.getElementById("opacity");

let noFlipBtn = document.getElementById("no-flip");
let flipXBtn = document.getElementById("flip-x");
let flipYBtn = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");


function resetFilter(){
    filterBlur.value = "0";
    filterContrast.value = "100";
    filterHue.value = "0";
    filterSepia.value = "0";
    filterBrightness.value ="100";
    filterGrayscale.value ="0";
    filterOpacity.value ="100";
    noFlipBtn.checked = true;
    addFilter();
    flipImage();
}

uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }
}

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter);
});

function addFilter(){
    image.style.filter = `blur(${filterBlur.value}px) 
    contrast(${filterContrast.value}%) 
    hue-rotate(${filterHue.value}deg) 
    sepia(${filterSepia.value}%)
    brightness(${filterBrightness.value}%)
    grayscale(${filterGrayscale.value}%)
    opacity(${filterOpacity.value}%)`;
}
 
let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach( radioBtn => {
    radioBtn.addEventListener("click", flipImage);
});

function flipImage(){
    if(flipXBtn.checked){
        image.style.transform = "scaleX(-1)";
    }
    else if(flipYBtn.checked){
        image.style.transform = "scaleY(-1)";
    }
    else{
        image.style.transform = "scale(1,1)";
    }
}

//Accordion:
let accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    //Toggle between adding and removing the "active" class,
    //to highlight the button that controls the panel 
    this.classList.toggle("active");
    //Toggle between hiding and showing the active panel 
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
