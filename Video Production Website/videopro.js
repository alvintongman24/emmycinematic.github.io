/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "90%";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

 
  var loader= document.getElementById("preloader");

  window.addEventListener("load", vanish );
  function vanish(){
    loader.classList.add("disppear")
  };

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

    
