const nav_left = document.querySelector(".content-menu")
const left_menu = document.querySelector(".left-menu")
nav_left.onclick = function(){
    left_menu.classList.toggle('hide')
}

let hoverMenu = document.querySelectorAll('.parentMenu')
for(let i = 0;i<3;i++){
    hoverMenu[0].onmouseover = function(){
        navMouseOver()
    }
    hoverMenu[1].onmouseover = function(){
        navMouseOver()
    }
    hoverMenu[2].onmouseover = function(){
        navMouseOver()
    }
}
function navMouseOver() {
    var submenu = ['1','2','3','4','5','6','7'];
    var current = null;
    current = submenu.shift();
    if(!!current){
        console.log(current)
    }
    // return current
}
  
  function navMouseOut() {
    let submenu = document.querySelectorAll('.submenu')

}  

// sub_array.forEach(function(e){
//     e.onmouseover = function(){
//         console.log(1)
//     }
// })

// hoverMenu.onmouseover = function(){
//     subMenu.classList.toggle('hover');
// };
// hoverMenu.onmouseout = function(){
//     subMenu.classList.remove('hover')
// }
// const subMenu3 = document.querySelector('.submenu3')
// const hoverMenu2 = document.querySelector('.parentMenu2')
// hoverMenu2.onmouseover = function(){
//     subMenu3.classList.toggle('hover');
// };
// hoverMenu2.onmouseout = function(){
//     subMenu3.classList.remove('hover')
// }
// const subMenu4 = document.querySelector('.submenu4')
// const hoverMenu3 = document.querySelector('.parentMenu3')
// hoverMenu3.onmouseover = function(){
//     subMenu4.classList.toggle('hover');
// };
// hoverMenu3.onmouseout = function(){
//     subMenu4.classList.remove('hover')
// }
window.addEventListener("scroll",function(){
    scrollFunction()
})
function scrollFunction() {
        // let check_menu = document.querySelector(".top-menu")
        if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
            check_menu.classList.toggle("fixed-header")
        }
        else{
            check_menu.classList.remove("fixed-header")
        }
        // if (check_menu.classList.contains('fixed-header')) {
        //     check_menu.classList.remove('fixed-header')
        // } else {
        //     if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        //         check_menu.classList.add('fixed-header')
        //     }
        //     else{
        //     }
        // }
        // let target = check.target;
        // switch(target.classList){
        //     case 'fixed-header':
        //         check.classList.remove("fixed-header");
        //         break;
        //     case '':
        //         check.classList.add("fixed-header")
        // }
        // if(check.classList.contains('fixed-header')){

        // }


    }
