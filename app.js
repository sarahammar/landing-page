/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const allsec= document.querySelectorAll('section');//put all sections in Variable to loop in them
const thelist= document.querySelector('ul');
const divCounter = document.getElementsByClassName("landing__container").length;
const fragment = document.createDocumentFragment();// for better performanc


// build the nav

allsec.forEach((allsec) => { //I well loop over the sections to add the nav elements and connect them to the sections
const eLEment = document.createElement('li');
const alink = document.createElement('a');
const secAtt = allsec. getAttribute('data-nav');
const nodetext = document.createTextNode(secAtt);
const sectionid = allsec.getAttribute('id');
const shref = alink.setAttribute('href', '#'+ sectionid);
//append the element to thier parents
eLEment.appendChild(alink);
alink.appendChild(nodetext);
fragment.appendChild(eLEment);

});
thelist.appendChild(fragment);


// Add class 'active' to section when near top of viewport
//the function that well locate the active section
const sectionInView = function(elem){
  const bound =elem.getBoundingClientRect();
  return(
    bound.top <=50 && bound.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  //looping over the sections again to find what section is active and give it the 'your-active-class' style
  for (v=1;v<divCounter+1;v++){
    const vsec = document.getElementById ('section' + v);
    window.addEventListener('scroll', function(movingclass){
      if (sectionInView(vsec)){
        vsec.classList.add('your-active-class'); //for the active section
      }
      else {
        vsec.classList.remove('your-active-class'); //for the inactive section
      }

  })
    false
}
//the end,,
