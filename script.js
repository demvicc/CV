const checkbox = document.getElementById("menuCheckbox");
const backdrop = document.getElementById("backdrop");

if (checkbox.checked == false){
    backdrop.style.removeProperty = 'display';
    backdrop.style.display = 'none';
    return backdrop;
}else{
    backdrop.style.removeProperty = 'display';
    backdrop.style.display = 'block';
};