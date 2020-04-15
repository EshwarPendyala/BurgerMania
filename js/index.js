function $(id){
    return document.getElementById(id);
}

$('submitMobileNumber').addEventListener('click',function(){
    if($('mobileNumber').value.length > 10)
    {
        alert('Invalid Number');
        $('mobileNumber').value = "";
    }
    else if ($('mobileNumber').value.length < 10)
    {
        alert('Invalid Number');
        $('mobileNumber').value = "";
    }
    else
    {
        window.location.href = "./orderHome.html";
    }
});