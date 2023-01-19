function opennav(){
    let match = window.matchMedia("(max-width:450px)").matches;

    console.log(match)
    if(match==false){
      document.getElementById("myslide").style.width="40%";
    }
    else if(match==true){
      document.getElementById("myslide").style.width="100%"
    }
  }

  function closenav(){
      document.getElementById("myslide").style.width="0"
  }