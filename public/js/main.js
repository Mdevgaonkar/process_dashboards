
  // Your custom JavaScript goes here

  const loader = $('<div class="containerLoading"> </div>');

$(document).ready(()=>{
  // $('#tbl_updates').toggle();
  // showLoaderFor('tbl_updates');


});


function showLoaderFor(elementId) {
  $(`#${elementId}`).append(loader.fadeIn(100));
}

function removeLoaderFor(elementId) {
  $(`.containerLoading`).fadeOut(100, function () {
      $(this).remove();
  });
}