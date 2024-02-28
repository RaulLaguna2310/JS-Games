const leia = require('prompt-sync')()
 
function getUserInfo(){
    let velocidade = leia("Digite sua velocidade : ")
    return {
        velocidadeDoUsuario : velocidade
    }
}
 
function calcVelo(Velformado=0){
   if(Velformado >60){
    return (Velformado - 60 ) *100
   }
   else {
    return 0
   }
}
 
function main(){
    let userData=getUserInfo()
    let velocidade = userData.velocidadeDoUsuario
    let multa = calcVelo(velocidade)
    console.log(multa)
}
 
main()