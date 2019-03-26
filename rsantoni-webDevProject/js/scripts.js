function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate(){
   
    var zip = $('#zip_code').val();
    if(isNan(zip)) {
        alert("Please inpput a valid zip code");
        return false;
    }
}