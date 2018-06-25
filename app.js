var toggler = document.querySelector('.toggler');
toggler.addEventListener('click',showEverything);

function showEverything(){
  var top1 = document.querySelector('.top1');
  var top2 = document.querySelector('.top2');
  var top3 = document.querySelector('.top3');
  var icons1 = document.querySelector('.icon1');
  var icons2 = document.querySelector('.icon2');
  var icons3 = document.querySelector('.icon3');
  var mainNav = document.querySelector('.navList');
  top1.classList.toggle('show');
  top2.classList.toggle('show');
  top3.classList.toggle('show');
  icons1.classList.toggle('show');
  icons2.classList.toggle('show');
  icons3.classList.toggle('show');
  mainNav.classList.toggle('show');
  toggler.classList.toggle('show');
}

function test(e,el){
  e.preventDefault();
  var parent = el.parentNode;
  console.log(el.text);
  
  if(el.text == "More info"){
    el.text = "Less";
  }else{
    el.text = "More info";
  }
  parent.classList.toggle('moreInfo');
}

// function smoothScroll(e,this,target,animT){
//   e.preventDefault();
//     //positions relative to target
//     var target = document.querySelector(target);
//     var targetPos = target.getBoundingClientRect().top;
//     var startPos = window.pageYOffset;
//     var distance = targetPos - startPos;
//     var startT = null;

//     function animationMove(curT){
//       if(startT=== null ){
//         startT= curT;
//       }
//       var timeE = curT - startT;
//       var run = ease(timeE,startPos,distance,anamT);
//       window.scrollTo(0,run)
//       if(timeE < duration){
//         requestAnimationFrame(animation)
//       }
//     }

//     function ease(t, b, c, d) {
//       t /= d;
//       return c*t*t*t + b;
//     };

//     requestAnimationFrame(animationMove);

// }

