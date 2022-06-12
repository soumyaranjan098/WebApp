function validate(){
    if( document.myForm.loc.value == "" && document.myForm.pnr.value == "" ) {
        alert( "Please provide required value" );
        document.myForm.pnr.focus() ;
        return false;
        }
    
}