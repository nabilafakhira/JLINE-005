window.onscroll = function() {scrollFunction()};
          
function scrollFunction() {
  if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250){
    document.getElementById("header").style.position= "absolute";
  }
  else if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("logo").style.opacity= "1";
  } else{
    document.getElementById("header").style.position= "fixed";
    document.getElementById("logo").style.opacity= "0";
  } 
}

const mvAreaLink = document.querySelectorAll('.scroll a')[0];

mvAreaLink.addEventListener("click", function(){
    const mvArea = document.getElementById('mv-area');
    mvArea.scrollIntoView({behavior: "smooth"});
  
});

const opAreaLink = document.querySelectorAll('.footer-bottom .right a')[0];

opAreaLink.addEventListener("click", function(){
    const opArea = document.getElementById('op-area');
    opArea.scrollIntoView({behavior: "smooth"});
  
});


const appearOptions = {
  treshold: 1,
  rootMargin: "-50px 0px 0px 0px"
}
const faders= document.querySelectorAll('.fadeIn');

const appearOnScoll = new IntersectionObserver(
  function(
    entries,
    appearOnScoll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting){
        return;
      } else{
        entry.target.classList.add('appear');
        appearOnScoll.unobserve(entry.target);
      }
    })
  },
  appearOptions);

  faders.forEach(fader => {
    appearOnScoll.observe(fader);
  })
