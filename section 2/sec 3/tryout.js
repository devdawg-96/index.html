
let myArr= ["banana", "apple" , "squid", "cake", "pear"]
myArr.shift()
console.log(myArr)
let myobject={
    "key": "value",
    "somekey" : 5 ,
    "anotherkey" : true
}
console.log(myobject.key)
const myobj={
    z:undefined,
    y:4,
    x:3
}
const {z=5}=myobj
console.log(z)
const[a,b]=[1,2]
console.log(b)
console.log(rest)
const myObj = {
    z: undefined,
    y: 4,
    x: 3
   }
   const {x,...rest}=myobj
   console.log(rest)
   let myObject = {
    "key": {
    "key" : 5,
    "newKey" : "value"
    },
    "someKey": 5,
    "anotherKey" : true
   }
   console.log(myObject['key']['newKey'])

   /*trying const */

   let x = 1
while(x < 10) {
 console.log(x)
 ++x
}