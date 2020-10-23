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
const sections = document.querySelectorAll("section"); //Query the all sections and store the list in variable
let navbarList = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// build the nav


 


  let fragment = document.createDocumentFragment();    //Fragment to Lighter performance .
  sections.forEach( section =>{                        //forEach on the list Variable.
      let link = document.createElement("a");          //Create (1 <li> and 1 <a> and 1 textNode ) for each section in the list.
      let newLi = document.createElement("li");  
      let getate = section.getAttribute("data-nav");     //the data-nav value from the section and store it in variable.
      let link_text = document.createTextNode(getate);    //add a TextNode to variable with the value section stored.
      link.classList.add("menu__link");
      link.appendChild(link_text);                        //append TextNode to <a> .
       newLi.appendChild(link);                          //append <a> to <li>.
     fragment.appendChild(newLi);                        //append <li> to fragment.
     link.addEventListener("click",function(){           //EventListener to the links and use scrollIntoView.
      section.scrollIntoView({ behavior: 'smooth' });
      });

    // const addClass = section.classList.add(getate);
       

  
  
  });
  
  navbarList.appendChild(fragment);                     //append that Fragment to the <ul>.
  







//Add class 'active' to section when near top of viewport

const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);   // used Math.floor of return values of getBoundingClientRect to get the returns the largest integer less than or equal to a given number.
} ;


let removeActiveClass = (section) =>{                       // remove the active class.
  section.classList.remove("your-active-class");            
  section.style.removeProperty("background");               // to remove style Property "color" of section.
}


let addActive = (add, section) => {                          // adding the active class.
  if(add){
      section.classList.add("your-active-class");
      section.style.background = "red";                      // to add color for the background.
  };
};

const activetion = () =>{                                    
sections.forEach (section =>{                                //forEach loop on the sections.
const viewport = offset (section);                            //to use returns offset "viewport rturns"  to actve other funcitons.
itsIN = () => viewport >-167 &&  viewport <= 300 ;         
//console.log(viewport);
                       
removeActiveClass(section);                                  // to actve funciton  remove rhe class from sections .  
addActive(itsIN(),section);                                  // to actve funciton by merge the active class fuciton to the viewport rturns forEach section.

});

};

 window.addEventListener('scroll' ,activetion);              //addEventListener to All that scroll calld "activetion" fuciton and work all of another funcitons.

  






