$(function($){
  $.ajax({
      url: 'https://api.teleport.org/api/cities/?search=${#search}',
      type: 'GET',
      data: "city: search-results",
      success: function(data) {
        console.log(data);
      }
  });

})
