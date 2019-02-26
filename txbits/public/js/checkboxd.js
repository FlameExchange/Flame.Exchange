
   $('#accepttos').click(function () {
        //check if checkbox is checked
        if ($(this).is(':checked')) {

            $('#CreateAccount').removeAttr('disabled'); //enable input

        } else {
            $('#CreateAccount').attr('disabled', true); //disable input
        }
    });