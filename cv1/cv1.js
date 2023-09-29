let coll = $('.header')
let children = $('.content')
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    for (i = 0; i < coll.length; i++){
        if(this.children[0] === coll[i].children[0]){
            coll[i].classList.toggle("active");
            if(this.children[0] !== coll[coll.length-1].children[0]){
                coll[i].children[0].classList.toggle("rotate");
            }
        }else{
            coll[i].children[0].classList.remove("rotate");
            coll[i].classList.remove("active");
        }
    }
    for (i = 0; i < children.length; i++){
        if(content === children[i]){
            if(children[i].style.display === "block"){
                children[i].style.display = "none";
            }else{
                children[i].style.display = "block";
            }
        }else{
            children[i].style.display = 'none'
        }
    }
  });
}