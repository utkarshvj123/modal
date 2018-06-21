$(()=>{

let appendthis =  ("<div class='modal-overlay js-modal-close'></div>");
  $('a[data-modal-id]').click(function(e){
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
   // $(".js-modalbox").fadeIn(500);
    let modalBox = $(this).attr('data-modal-id');
      $('#'+modalBox).fadeIn($(this).data());
  });  

  
$(".js-modal-close, .modal-overlay").click(() =>{
  $(".modal-box, .modal-overlay").fadeOut(500, () =>{
    $(".modal-overlay").remove();
    alert("comin3")
  });
});


$(window).resize(() =>{
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});


$(window).resize();

});