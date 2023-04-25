//Lets grab and store our html elements in a variable for further manipulations
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");  //You can grab an entire element using querySelectors (In This case all the a tags)

//Add an Event listener that waits for user click
burger.addEventListener("click", () => {
    //If burger clicked = true do the following
    nav.classList.toggle("nav-open"); //grab .nav give it a class of nav-open.Notice we used the 
    //toggel object which basically adds and removes the nav-open on every click.We can use add but it is'nt that effective
    burger.classList.toggle("toggle");
})

//When we click on the link we want  close the nav-open
links.forEach(link => {
    link.addEventListener("click", ()=>{
        //If any of the links get clicked do this.However since toggle is already on it does the opposite = close the nav-open
        nav.classList.toggle("nav-open");
        //The burger might turn white.To return to former state
        burger.classList.toggle("toggle"); //Since toggle is on it does the oppostite and return the burger to its former state
    })
})