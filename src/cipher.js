const cipher = {
  encode: function (offset, texto){

    var resultado = "";
    if (offset === null){
      throw TypeError ('No es válido');
    
    } else if (texto == []){
      throw new TypeError ('No es válido');  
    }
 else if (offset === 0){
   throw new TypeError ('No es válido');
 }

    for (let i=0; i <texto.length; i++){
       let newtext = texto.charCodeAt(i); //charCodeAt convertirá cada una de mis letras a ASCII
    if (newtext >= 65 && newtext <= 90){
     resultado += String.fromCharCode((newtext - 65 + offset) % 26 + 65);}//regresará si está en mayusculas
    else if (newtext >=97 && newtext <=122){
    resultado += String.fromCharCode((newtext - 97 + offset) % 26 + 97);} //regresará cifrado si está en minusculas
    else {
     resultado += texto.charAt(i);//
    }
  }
return resultado;
    }, 

    decode: function (offset, texto){
      var resultado2 = "";
      var offset2= 26-(offset%26);
      if (offset === null){
        throw TypeError ('No es válido');
      
      } else if (texto == []){
        throw new TypeError ('No es válido');  
      }
   else if (offset === 0){
     throw new TypeError ('No es válido');
   }

      for (let i=0; i <texto.length; i++){
     
      let newtext = texto.charCodeAt(i);
      if (newtext >= 65 && newtext <= 90){
       resultado2 += String.fromCharCode((newtext - 65 + offset2) % 26 + 65);}
      else if (newtext >=97 && newtext <=122){
      resultado2 += String.fromCharCode((newtext - 97 + offset2) % 26 + 97);}
      else {
       resultado2 += texto.charAt(i);
      }
    }
  return resultado2;
  },
}
export default cipher;