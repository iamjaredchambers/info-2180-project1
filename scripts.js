window.onload = function (e)
{
    document.getElementById("#myFormId").addEventListener("submit", function(e){
        if(!isValid){
            e.preventDefault();    //stop form from submitting
        }
          //do whatever an submit the form
    });
}