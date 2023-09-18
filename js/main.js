
var item = document.getElementsByClassName("item"); // html colletio
var Close = document.getElementById("close");
var boxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var imgs = Array.from(document.querySelectorAll(".item img"));
var next = document.getElementById("next");
var prev=document.getElementById('prev')

Close.addEventListener("click", function (e) {
    boxContainer.style.display = "none";

})


var imgIndex=0
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        imgIndex = imgs.indexOf(e.target);
        var src = e.target.src
        boxItem.style.backgroundImage = `url(${src})`;
        boxContainer.style.display="flex"
    })
}

next.addEventListener('click',nextItem)
function nextItem() {
    imgIndex++
    if (imgIndex == imgs.length) {
        imgIndex=0
    }
    boxItem.style.backgroundImage=`url(${imgs[imgIndex].src})`
}

prev.addEventListener('click', prevImg)
function prevImg() {
    imgIndex--
    if (imgIndex < 0 ) {
        imgIndex = imgs.length-1;
    }
    boxItem.style.backgroundImage = `url(${imgs[imgIndex].src})`;
}


document.addEventListener('keyup', function (e) {
    if (e.key == 'ArrowRight') {
        nextItem()
    } else if (e.key == 'ArrowLeft') {
        prevImg()
    } else if (e.key == 'Escape') {
        boxContainer.style.display = "none";
    }
})

boxContainer.addEventListener('click', function (e) {
    boxContainer.style.display = "none";
    boxItem.addEventListener('click', function (e) {
        e.stopPropagation()
    })
})




// other seluton 
for (var i = 0; i < item.length;i++) {
    item[i].addEventListener("click", function (e) {
        var src = e.target.src;
        boxItem.style.backgroundImage=`url(${src})`
        boxContainer.style.display = "flex";
    });
}












