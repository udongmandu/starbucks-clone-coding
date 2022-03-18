const hovereffect = document.querySelector(".coffee");
const menu = document.querySelector(".menu");
const store = document.querySelector(".store");
const reponsibility = document.querySelector(".reponsibility");
const starbucksrewards = document.querySelector(".starbucksrewards");
const whatsnew = document.querySelector(".whatsnew");


const box0 = document.querySelector(".box");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");


const service_box = document.querySelector(".open_service");
const section_wrap = document.querySelector(".section_wrap");
const banner = document.querySelector(".banner");
const banner_box = document.querySelector(".banner_box");
const blank = document.querySelector(".blank");



function mouse_on(a,b){
  service_box.classList = "open_service_on";
  switch(a){
    case 1 : mouse_off2(); hovereffect.classList = "open_service_hover"; break;
    case 2 : mouse_off2(); menu.classList = "open_service_hover"; break;
    case 3 : mouse_off2(); store.classList = "open_service_hover"; break;
    case 4 : mouse_off2(); reponsibility.classList = "open_service_hover"; break;
    case 5 : mouse_off2(); starbucksrewards.classList = "open_service_hover"; break;
    case 6 : mouse_off2(); whatsnew.classList = "open_service_hover"; break;
    default : break;
  }

  switch(b){
    case 1 : box_hidden(); box0.classList = "box"; break;
    case 2 : box_hidden(); box2.classList = "box2"; break;
    case 3 : box_hidden(); box3.classList = "box3"; break;
    case 4 : box_hidden(); box4.classList = "box4"; break;
    case 5 : box_hidden(); box5.classList = "box5"; break;
    case 6 : box_hidden(); box6.classList = "box6"; break;
    default : break;
  }
}

function box_hidden(){
  box0.classList = "hidden";
  box2.classList = "hidden";
  box3.classList = "hidden";
  box4.classList = "hidden";
  box5.classList = "hidden";
  box6.classList = "hidden";
}


function mouse_off(){
  service_box.classList = "open_service_off";
  hovereffect.classList = "coffee";
  menu.classList = "coffee";
  store.classList = "coffee";
  reponsibility.classList = "coffee";
  starbucksrewards.classList = "coffee";
  whatsnew.classList = "coffee";
}

function mouse_off2(){
  hovereffect.classList = "coffee";
  menu.classList = "coffee";
  store.classList = "coffee";
  reponsibility.classList = "coffee";
  starbucksrewards.classList = "coffee";
  whatsnew.classList = "coffee";
}

blank.addEventListener("mouseenter",mouse_off);
section_wrap.addEventListener("mouseout",mouse_off);

hovereffect.addEventListener("mouseenter",()=>{mouse_on(1,1);});
menu.addEventListener("mouseenter",()=>{mouse_on(2,2);});
store.addEventListener("mouseenter",()=>{mouse_on(3,3);});
reponsibility.addEventListener("mouseenter",()=>{mouse_on(4,4);});
starbucksrewards.addEventListener("mouseenter",()=>{mouse_on(5,5);});
whatsnew.addEventListener("mouseenter",()=>{mouse_on(6,6);});

