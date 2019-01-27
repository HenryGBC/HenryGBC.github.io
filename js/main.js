(function() {

    var pointers = document.getElementsByClassName('pointer');
    var showPointers = [];
    for(var i = 0; i < pointers.length; i++){
        showPointers[i]=false;
    }
    setInterval(()=>{
        for(var i = 0; i < pointers.length; i++){
            // divsToHide[i].style.visibility = "hidden"; // or
            // divsToHide[i].style.display = "none"; // depending on what you're doing
            if(showPointers[i]){
                pointers[i].style.display = "none";
                showPointers[i] = false;
            }else{
                pointers[i].style.display = "block";
                showPointers[i] = true;
            }
        }
    }, 600);
    
 
 })();