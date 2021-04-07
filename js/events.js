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

$(document).ready(function(){

// call functions here

});
