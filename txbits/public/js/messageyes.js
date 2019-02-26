$(function(){
    $('#signup-form').submit(function(e) {
        if ($('#email').val() == $('#email2').val()) {
		$("#exampleModal").modal('show');
        }
    });
});