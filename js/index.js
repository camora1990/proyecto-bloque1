$(function () {
  $("[data-toggle='tooltip']").tooltip();
  $('[data-toggle="popover"]').popover();
  $('.carousel').carousel({
    interval:2500
  })

  $('#contacto').on('show.bs.modal',function(e){
  console.log('modal se esta mostrando');
  $('#contactoBtn').prop('disabled', true);
  $('#contactoBtn').removeClass('btn-primary')
  $('#contactoBtn').addClass('btn-dark')

  });
  $('#contacto').on('shown.bs.modal',function(e){
  console.log('modal se mostro')
  });  
   $('#contacto').on('hide.bs.modal',function(e){
  console.log('modal se esta ocultando')
  });
  
  $('#contacto').on('hidden.bs.modal',function(e){
  console.log('modal se oculto')
  $('#contactoBtn').prop('disabled', false);
  $('#contactoBtn').removeClass('btn-dark')
  $('#contactoBtn').addClass('btn-primary')

  });
  
  $('#contacto').on('hidePrevented.bs.modal',function(e){
  console.log('modal se oculto con esc')
  });
});