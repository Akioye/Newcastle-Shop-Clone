function Toggler () {
    document.getElementById('dropper').classList.toggle('show')
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function ImgToggler(){
    document.getElementById('card').classList.toggle('show')
}

  function myFunc(){
    alert("You Clicked me");
 }