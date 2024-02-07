const trex=document.querySelector("#trex");
const kaktus=document.querySelector("#kaktus");

function zipla(){
    if(kaktus.classList!="kaktus-animate")
    {
        kaktus.classList.add("kaktus-animate");
    }

    if(trex.classşList!="trex-animate")
    {
        trex.classList.add("trex-animate");
        setTimeout(function(){
            trex.classList.remove("trex-animate");
        },500);
    }
}

var carpismaKontrol = setInterval(function(){
    var trexBottom = parseInt(window
        .getComputedStyle(trex)
        .getPropertyValue("bottom"));

    var kaktusLeft = parseInt(window
        .getComputedStyle(kaktus)
        .getPropertyValue("left"));


    if(kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40){
        kaktus.classList.remove("kaktus-animate");
        kaktus.computedStyleMap.display="none";
        alert("Oyun Biter...")
    }
},10);