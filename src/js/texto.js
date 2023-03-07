function diminuirLetra(){
    var font = document.getElementById("Conteudo").style.fontSize;
    font = font.replace("px","");
    
    if(font == ""){		 
          document.getElementById("Conteudo").style.fontSize = "11px";
    }else{
      document.getElementById("Conteudo").style.fontSize = (parseInt(font)-1)+"px";
    }
}
function aumentarLetra(){
    var font = document.getElementById("Conteudo").style.fontSize;
    font = font.replace("px","");
    
    if(font == ""){		 
          document.getElementById("Conteudo").style.fontSize = "13px";
    }else{
      document.getElementById("Conteudo").style.fontSize = (parseInt(font)+1)+"px";
    }
}