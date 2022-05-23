const filterIcon = document.querySelector("#filter-button");
const filter = document.querySelector(".filter");
filterIcon.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  //filterIcon.classList.toggle("filter-active");
  filter.classList.toggle("filter-active");
});
const checkCategory = document.querySelectorAll('input[name="filter"]');
const section = document.querySelectorAll('.section');
const allServicesList = document.querySelector('.allServices__list');
console.log(section);

for(const el of checkCategory){
  if(el.checked){
    console.log(el.id.slice(-1));
    if(el.id.slice(-1) == '0'){
      for(const sec of section){
        console.log(sec);
        sec.removeAttribute("hidden");
        } 
    }
  }
}

filter.onclick = function (){
  for(const el of checkCategory){
    if(el.checked){
      console.log(el.id.slice(-1));
      if(el.id.slice(-1) == '0'){
        for(const sec of section){
          console.log(sec);
          sec.removeAttribute("hidden");
          } 
      }
      else{
      //console.log(el.id);
      let category = el.id.slice(-1);
      //console.log(category.slice(-1));
      for(const sec of section){
        if(sec.id == category){
          console.log(sec.id);
          sec.removeAttribute("hidden");
        }
        else {
          sec.setAttribute("hidden", "hidden");
        }
      }
    }
    }
  }
}