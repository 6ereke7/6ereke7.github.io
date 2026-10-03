var navs = document.getElementById('navlinks').children;
var active;
for(var i = 0; i < navs.length; i++){
   if(i === 0) {
      active = navs[i].children[0]
      active.className = 'active'
   }
   navs[i].addEventListener("click",(e) =>{
    e.target.className = "active";
    active.className = ''
    active = e.target
   })
}


