//Oque são vetores ou arrays

//Como declarar um array
// let array = ['string', 1, true]
// console.log(array)

//Arrays podem guardar vários tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
// console.log(array[3])

//forEach
// array.forEach(function (item, index) {
//   console.log(item, index)
// })

//push
// array.push('novo item no final')
// console.log(array)

//pop
// array.pop()
// console.log(array)

// //shift
// array.shift();
// console.log(array)

// //unshift
// array.unshift('novo item no inicio')
// console.log(array)

// //indexOf
// console.log(array.indexOf(true))

// //splice
// array.slice(0,2)
// console.log(array)

// let novoArray = array.slice(0, 3)
// console.log(novoArray)
let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array'],
  objInterno: { objInterno: 'ObjInterno' }
}
console.log(object)
//objetos tambem guarda objetos assim como arrays guardam arrays
