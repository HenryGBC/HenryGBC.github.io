(function() {

    var pointer = document.getElementsByClassName('pointer');
    var showPointer = true;

    // for(var i = 0; i < divsToHide.length; i++){
    //     divsToHide[i].style.visibility = "hidden"; // or
    //     divsToHide[i].style.display = "none"; // depending on what you're doing
    // }
    setInterval(()=>{
        if(showPointer){
            pointer[0].style.display = "none";
            showPointer = false;
        }else{
            pointer[0].style.display = "block";
            showPointer = true;
        }
    }, 600);
 
 })();