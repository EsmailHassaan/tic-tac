let xo = "x";
let squ = [];
var title = document.querySelector(".title");

for (let i = 1; i < 10; i++) {
   squ[i] = document.getElementById("item" + i);

   function go() {
        if (xo === "x" && squ[i].innerHTML === "") {
            squ[i].style.cssText = "color : blue";
            squ[i].innerHTML="x";
            title.innerHTML="o";
            xo = "o";
        }else if(xo === "o" && squ[i].innerHTML === ""){
            squ[i].innerHTML="o";
            title.innerHTML="x";
            xo = "x";
        }
    goo();
    }
    
   squ[i].addEventListener("click",go);
}
function goo() {
    if (squ[1].innerHTML == squ[2].innerHTML && squ[2].innerHTML == squ[3].innerHTML && squ[1].innerHTML != "") {
        gooo(1,2,3);
    }else if (squ[4].innerHTML == squ[5].innerHTML && squ[5].innerHTML == squ[6].innerHTML && squ[4].innerHTML != "") {
        gooo(4,5,6);
    }else if (squ[7].innerHTML == squ[8].innerHTML && squ[8].innerHTML == squ[9].innerHTML && squ[7].innerHTML != "") {
        gooo(7,8,9);
    }else if (squ[1].innerHTML == squ[4].innerHTML && squ[4].innerHTML == squ[7].innerHTML && squ[4].innerHTML != "") {
        gooo(1,4,7);
    }else if (squ[2].innerHTML == squ[5].innerHTML && squ[5].innerHTML == squ[8].innerHTML && squ[5].innerHTML != "") {
        gooo(2,5,8);
    }else if (squ[3].innerHTML == squ[6].innerHTML && squ[6].innerHTML == squ[9].innerHTML && squ[9].innerHTML != "") {
        gooo(3,6,9);
    }else if (squ[1].innerHTML == squ[5].innerHTML && squ[5].innerHTML == squ[9].innerHTML && squ[1].innerHTML != "") {
        gooo(1,5,9);
    }else if (squ[3].innerHTML == squ[5].innerHTML && squ[5].innerHTML == squ[7].innerHTML && squ[3].innerHTML != "") {
        gooo(3,5,7);
    }else if(squ[1].innerHTML !="" && squ[2].innerHTML !="" && squ[3].innerHTML !="" && squ[4].innerHTML !="" && squ[5].innerHTML !="" && squ[6].innerHTML !="" && squ[7].innerHTML !="" && squ[8].innerHTML !="" && squ[9].innerHTML !="" ){
        setInterval(function () {title.innerHTML ="try again"},1000);
        setTimeout(function(){location.reload()},2000);
    }
}

function gooo(a,b,c){
    title.innerHTML=`(${squ[a].innerHTML})  is Winner` ; 
    (squ[a]).style.background="black";
    (squ[b]).style.background = "black";
    (squ[c]).style.background = "black";
    setInterval(function () {title.innerHTML +="."},1000);
    setTimeout(function(){location.reload()},2000)
}



  
