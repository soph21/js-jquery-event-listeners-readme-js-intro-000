//define functions here
function getIt() {
  $('p').click(function() {
    alert ("Hey!")
  })
}

function frameIt() {
  $('img').load(function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').keydown(function(key) {
    if(key.which == 71){
      alert('G was pressed')
    }
    })
}

$(document).ready(function(){

// call functions here

});
