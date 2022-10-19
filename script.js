$('.listeonglet li').mouseenter(function(){
       $(this).children('.deroulant').css('transition','1s')
       $(this).children('.deroulant').css('opacity','1')
       $(this).children('.deroulant').css('height','80px')
})
$('.listeonglet li').mouseleave(function(){
       $(this).children('.deroulant').css('opacity','0')
       $(this).children('.deroulant').css('height','0px')
})