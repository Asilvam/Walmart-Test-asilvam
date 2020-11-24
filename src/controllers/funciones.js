module.exports = {
espalindrome: (texto) =>{
    //console.log ('llego a espalindrome valor -->'+texto);
    if(texto.length <= 1){
        return false;
    } else {
        iguales = true;
        i=0;
        x=texto.length;
        while (x>1 && iguales){
            primero = texto.charAt(i);
            //console.log(primero);
            ultimo =  texto.charAt(texto.length-(i+1));
            //console.log(ultimo);
            if (primero!= ultimo){
                iguales=false;         
            }
            i++;
            x=x-2;
        }
        return iguales;
    } 
},
procesar: (prods)=>{
    //console.log('llego procesar -->'+prods);
    prods.forEach(element => {
        //console.log(element);
        element.price=Math.round(element.price / 2);
        return prods;
    });

}
}