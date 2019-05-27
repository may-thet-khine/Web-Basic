$(document).ready(function() {

    $('#submit').click(function(e) {
      e.preventDefault();
      var companyname  = $('#companyname').val();
      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();
      
  
      $(".error").remove();
  
      if (companyname.length < 1) {
        $('#companyname').after('<span class="error">This field is required</span>');
      }
      if (firstname.length < 1) {
        $('#firstname').after('<span class="error">This field is required</span>');
      }
      if (lastname.length < 1) {
        $('#lastname').after('<span class="error">This field is required</span>');
      } 
    
    });
  
  });