// landing page behaviour

// navigation criteria
let navbar_list = document.getElementById('navbar__list'); //stores the empty list in a var
const sectioncont = document.getElementsByTagName('section'); //gathers all the sections in a domstring


for (i = 1; i <sectioncont.length +1; i++){
let h2_tag_string ='#sect'+i+'-name';
let h2_tag_var =document.querySelector(h2_tag_string);
let h2_tag_text = h2_tag_var.textContent;
//^^this chunk collects the id's of h2 and stores its text in a var

let list_item = document.createElement('li');
let list_item_text= document.createTextNode(h2_tag_text);
list_item.appendChild(list_item_text);
navbar_list.appendChild(list_item);
//creates a new list item and appends the h2 text in it

let list_item_id="sect"+i+"list";
let list_item_class="sect"+i+"class";
list_item.setAttribute('id', list_item_id);
list_item.setAttribute('class', list_item_class);
//creates id and class and adding attribute;


//scroll to anchor criteria
let section_anchor= document.getElementById('sect'+i);
let section_caller= document.getElementById(list_item_id)

//setting the CALLER from the nav and the ANCHOR that the browser will scroll to

section_caller.addEventListener('click',function(){
    section_anchor.scrollIntoView({ behavior:"smooth"})
})

//a smoooooth transition to anchor

}


//active state criteria

//checking if the section is in the viewport (learned it here https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/)
function border(){
    let viewport_checker = function(e){
        let border = e.getBoundingClientRect();
        
    
        return(
            border.top <= 0 &&
            border.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            border.right <=
              (window.innerWidth || document.documentElement.clientWidth) 
        );
    };

    //making the visible section on the viewport active (learned it here https://www.w3schools.com/howto/howto_js_active_element.asp)
    for (i = 1; i <sectioncont.length +1; i++){
        let visible_section = document.getElementById('sect'+i);
    
        window.addEventListener('scroll',function(e){
            if(viewport_checker(visible_section)){
                visible_section.classList.add('active')
            }
            else{
                
                visible_section.classList.remove('active')
            }
        },false
        );
    }
};

// used the sticky css setting, better than letting the navbar glued fixed
window.onscroll = function() {myfunction()};
const navbar_var= document.getElementById("nav_header");
const sticky = navbar_var.offsetTop;

function myfunction(){
    if (window.pageYOffset >= sticky){
        navbar_var.classList.add('sticky');
    }
    else{
        navbar_var.classList.remove('sticky');
    }
}

border();



