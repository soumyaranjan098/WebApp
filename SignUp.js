function validate() {
    if( document.myForm.name.value == "" ) {
    alert( "Please provide your name!" );
    document.myForm.name.focus() ;
    return false;
    }
    if( document.myForm.email.value == "" ) {
    alert( "Please provide your Email!" );
    document.myForm.email.focus() ;
    return false;
    }
    

    if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
    document.myForm.phone.value.length != 10) {
    alert( "Please provide a contact no. in the format ##########" );
    document.myForm.phone.focus() ;
    return false;
    }


    if( document.myForm.password.value == "" )
    {
        alert( "Please enter your password!" );
        document.myForm.password.focus() ;
        return false;
    }
    if( document.myForm.confirm_password.value == "" )
    {
        alert( "Please confirm your password!" );
        document.myForm.confirm_password.focus() ;
        return false;
    }
    if(document.myForm.password.value !=  document.myForm.confirm_password.value   )
    {
        alert( "should be same with given password!" );
        document.myForm.confirm_password.focus() ;
        return false;
    }
    
    
    else{
        return( true );
    }
    
    
 }
   