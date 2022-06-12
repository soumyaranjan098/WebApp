function validate() {
    var x = document.getElementById("name").value;
    var y = document.getElementById("password").value;
    if( x == "" || x == null) {
    alert( "Please provide UserName!" );
    document.myForm.name.focus() ;
    return false;
    }

    if( y == "" || y == null )
    {
        alert( "Please enter your password!" );
        document.myForm.password.focus() ;
        return false;
    }
    
    else{
        return( true );
    }
    
    
 }