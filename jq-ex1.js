$('button').click(function() {
  $('p').show("slow");
});
$('button').dblclick(function() {
  $('p').hide(3000)
});


$('h1').on({
  mouseenter: function(){
    $('h1').css('background-color','yellow');
  }, mouseleave: function(){
    $('h1').css('background-color','red');
  },
})
