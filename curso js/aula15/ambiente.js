let num = [4,2,5,1]
num[1] = 3 //modifica ou inicia com o indice
num.push(4)//cria mais um elemento no array
console.log(num.length)//tamanho do vetor
console.log(`nosso vetor é o ${num[2]}`)
console.log(num.sort())//deixa o vetor ordenado
let pos = num.indexOf(5)
if(pos == -1){
    console.log("a posição não foi encontrada")
} else{
console.log(`o valor 4 está no valo ${pos}`)
}
console.log(num)