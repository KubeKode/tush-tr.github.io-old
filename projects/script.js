const viewmore = document.querySelector(".viewbutton1");
const viewcontent = document.querySelector(".viewmore1");
for(var i =1;i<2;i++){
    document.querySelector(`.viewmore${i}`).style.display = "none";
}
for(var i=1;i<2;i++){
    document.querySelector(`.viewbutton${i}`).addEventListener("click",()=>{
    if(document.querySelector(`.viewmore${i}`).style.display == "none"){
        document.querySelector(`.viewbutton${i}`).innerHTML = "View Less";
        document.querySelector(`.viewmore${i}`).style.display = "block";
    }
    else{
        document.querySelector(`.viewbutton${i}`).innerHTML = "View More";

        document.querySelector(`.viewmore${i}`).style.display = "none";
    }
});
}