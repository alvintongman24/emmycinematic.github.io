/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "90%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


var loader = document.getElementById("preloader");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear")
};








//change color

let changecolour = document.querySelector(".changecolor");


const link = document.querySelector("link");
var body = document.querySelector('body');

function changecolor() {

  setTimeout(function () {

    //adding fade out class from css
    body.classList.add('fade-out')

    link.href = "videoprodark.css";
  }, 2000);

  //remove the current event listner
  changecolour.removeEventListener('click', changecolor);

  //add the other event listner
  changecolour.addEventListener('click', changecolor2);

  //change color of settings

  const congsIcon = document.querySelector('header i.fa.fa-cogs');

  congsIcon.style.color = "gold";

  //signs
  first.style.color = 'red';

  //animation - hr
  var animationhr = document.querySelector('.words hr');
  animationhr.style.color = 'red'
}

changecolour.addEventListener('click', changecolor);






function changecolor2() {

  setTimeout(function () {

    //adding fade out class from css
    body.classList.add('fade-out')

    link.href = "videopro.css";
  }, 1000);


  //remove the current event listner
  changecolour.removeEventListener('click', changecolor2);

  //add the other event listner
  changecolour.addEventListener('click', changecolor);

}


//cards
/*
function getPageList(totalPages, page, maxLength){
  function range(start, end){
    return Array.from(Array(end - start + 1),(_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if(totalPages <= maxLength){
    return range(1, totalPages);
  }

  if(page <= maxLength - sideWidth - 1 - rightWidth){
    return range(1, maxLength - sidewidth - 1).concat(0, range (totalpages - sidewidth +1, totalPages));
  }

  if(page >= totalpages - sidewidth - 1 - rightwidth){
    return range(1, sidewidth).concat(0, range(totalpages- sidewidth - 1 - rightwidth - leftWidth, totalpages))
  }

  return range(1, sidewidth).concat(0, range(page - leftWidth, page + rightwidth), 0, range(totalpages - sidewidth + 1, totalpages));
  $(function(){
    var numberofitems = (".card-content .card").length;
    var limitPorPage = 3;
    var totalPages = Math.cell(numberofitems /limitPorPage);
    var pginationSize = 7;
    var currentPage;

    function showPage(whichPage){
      if(whichPage < 1 || whichPage > totalPages) return false;

      currentPage = whichPage;

      $(".card-content .card").hide().slice((currentPage - 1) * limitPorPage, currentPage * limitPorPage).show();

      $(".btn button").slice(1, -1).remove();

      getPageList(totalPages, currentPage, pginationSize).forEach(item =>{
        $("<button>").addClass("coporate"))
      })
    }
   

  */

//list
//make the last li yellow permanently




function sell() {
  const documentory = document.querySelector(".dropdown");
  const listin = documentory.querySelector("ul");
  const show = listin.querySelector('li:nth-child(5)').style.color = 'red';
  console.log(listin)

}

sell();



//body fadeout
function nav() {
  // add fade-out class to intiate the transition
}




//Append
const pg = document.getElementById('pg');

pg.innerText = 'PG';


var hd = document.getElementsByClassName("hd")[0];
//hd.innerText = 'HD max'

var word = 'x';
hd.append(word);



var create = document.createElement('strong')

var first = document.getElementsByClassName('fit')[0];

var last = first.innerText = "*sigh*";
first.style.color = 'gold';
first.backgroundColor = 'green'
//first.style.fontSize = "xx-large";


var form = document.getElementsByClassName('fist')[0];
var fom = form.getAttribute('first');
form.style.color = 'white';



//attribute
//make an element
const add = document.createElement('strong');

//target the id
const tq = document.getElementById('tq')

// id.innerhtmlText=
next = tq.innerText = "online streaming for 24hrs";

//appending both id & element created
var naw = tq.append(add);

// making it strong


// Id.append('innertext')


// ATTRIBUITE

//getting the id through #id
var hope = document.querySelector('#adding');



//more info on setAttribute  //getattribute... just get the id in the element 
//this change the id to hope 
console.log(hope.setAttribute('id', 'hope'));


//DATA-ANYNAME
var cal = document.getElementById('cal')
const dats = console.log(cal.dataset);


//creating a word using dataset
var hem = cal.dataset.newName = 'h1';
console.log(hem);



// set , add and remove class...................


// call out id
const make1 = document.getElementById('writ')

//create a set

const firstset = new Set(['shake it' + ' i feel your vibration']);

// create a variable
const done = "Bad virus in my option";

//using add set([first+done])
const addss = firstset.add([done])

//check
console.log(addss);

const rem = 'gold';

//add rem again 

var atp = addss.add([rem]);

//remove the rem we just added

var ayary = atp.clear([rem]);

//listener 

const media = document.getElementById('btn');


function anna(e) {
  if (e) {
    var nowr = media.innerText = "road"
    media.style.color = 'brown';
    media.setAttribute("class", "hod"); //...we just gave it a class named hod
    media.style.fontSize = 15;
    media.style.borderRadius = "";
    media.style.display = "block";
    var sir = media.getAttribute("src") //.....we just added a src=""
    // media.classList.add("disppear")
    media.classList.add("underline")
    media.classList.add("italic", "bold");

  } else {
    media.innerText = "long";
  }
}

const mevent = media.addEventListener('click', anna);



//emmyclick()

var fo = document.querySelector(".fo");
let foot = document.querySelector('.fi');
function emmy() {
  word = fo.innerText = 'emmycinematic';
  fo.style.color = "gold";
  fo.innerText = "Copyright @ 2023. All Right Reserved By " + word;
  var footerh1 = foot.append('h1');
  foot.innerText = "SIGN OUT"
}

fo.addEventListener("click", emmy);





//THE GAME

//get access to number
let numb1 = document.querySelector('.numb1');
let numb2 = document.querySelector('.numb2');


//initialize the number to 0(turn it to 0)
numb1.textContent = 0;
numb2.textContent = 0;


let total=0;
let scores=[0,0,0];  //...pls remeber that array starts with 0..and we using 1,2...which means [0,1,2]
let activeplayer=1;



activeplayer=activeplayer === 2 ? 1 : 2;  // activeplayr= 1===2 activeplayer 1===1(both true)
document.querySelector('.numb1');
document.querySelector('.numb2');
//create a function




//button for roll dice
var rolldice = document.querySelector('.rolldice');



//get the image /so you can hide it
let dicepic = document.querySelector('.pic');
dicepic.style.display = "none"; //or dicepic.classList.add('hidden')..found in css as .hidden{display:none}


var holdbtn=document.getElementById('holds');

let newgame=document.querySelector('.newgame');




//create an eventlistner to put all action for rolldice

rolldice.addEventListener('click', throwdice)




function throwdice() {
  //random numbers 1-6
  var random = Math.trunc(Math.random() * 6) + 1;



  //display the dice image in the webpage

  dicepic.style.display = "";
  dicepic.src = `dice${random}.png`;

  // if the random number is not 1 then add it to active player

  //player1 current
  total=0; 
  if(random!=1){
 total+=random;
 document.querySelector(`.numb${activeplayer}`).textContent=total;

 
  }else{
    document.querySelector(`.numb${activeplayer}`).textContent=total;
    activeplayer=activeplayer === 2 ? 1 : 2;  // activeplayr= 1===2 activeplayer 1===1(both true)


    //lets change the color anytime it moves
var player1=document.querySelector('.player1');
var player2=document.querySelector('.player2');



    player1.classList.toggle('current1-active');
    player2.classList.toggle('current2');
  }




}

//hold funtionality
holdbtn.addEventListener('click',hold);



let switchplayer= function(){
  total=0;
  document.querySelector(`.numb${activeplayer}`).textContent=total;
  activeplayer=activeplayer === 2 ? 1 : 2;  // activeplayr= 1===2 activeplayer 1===1(both true)


}


function hold(){
  //add current score to total score
 scores[activeplayer]+= total;
 document.querySelector(`.nber${activeplayer}`).textContent= scores[activeplayer];
 


 //check if the player has reached maximum score
 if(scores[activeplayer]>=100){
  //finish 
  let play=document.querySelector(`.player${activeplayer}`);
  play.classList.add('winner');
  
  //get the class of h1
 let winner= document.querySelector(`.ply${activeplayer}`);
 winner.textContent='WINNER!!!!';

 //hide dice image
 dicepic.style.display = "none"; 
 rolldice.style.display = "none"; 
 holdbtn.style.display = "none"; 


 }else{
  switchplayer();
 }


}


newgame.addEventListener('click',startagain);


function startagain(){

  document.querySelector('.ply1').textContent='player1';
 document.querySelector('.ply2').textContent='player2';
 document.querySelector('.nber1').textContent=0;
 document.querySelector('.nber2').textContent=0;
 document.querySelector('.numb1').textContent=0;
 document.querySelector('.numb2').textContent=0;
 document.querySelector('.player1').classList.remove('winner');
 document.querySelector('.player2').classList.remove('winner');
 document.querySelector('.player2').classList.remove('current2');


 scores=[0,0,0];
 activeplayer=1;




  dicepic.style.display = ""; 
 rolldice.style.display = ""; 
 holdbtn.style.display = ""; 
}
// all praises belong to you Jesus +




// Asychronous/synchronous


const imagesynchro= document.getElementById('images-synchro');

const imagesynchro2= document.getElementById('images-synchro2');


imagesynchro.style.display='none';

setTimeout(()=>imagesynchro.style.display='',10000);


setTimeout(()=>imagesynchro2.style.display='',50000);




//javascript classes (better way of using object)

class emmanuel{
  constructor(place,cost){
    this.place = place;
    this.cost = cost;

  }
  display(){
    console.log(`place:${this.place}`);
    console.log(`cost:${this.cost}`);
  }
}
const emmanuel1 = new emmanuel('lekki',`${50}M`);
const emmanuel2 = new emmanuel('ogun',`${10}M`);


var choose= Math.trunc(Math.random() * 2) + 1;
console.log(choose);

emmanuel1.display();



