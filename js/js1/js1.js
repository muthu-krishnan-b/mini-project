/*{
    let item={
        name:'phone',
        price:7600,
        quantity:1,
        categori:['mk','phone'],   
    }
    console.log(item)
    console.log(item.categori[1])

    let item2=new Object();
    item2.name='muthu'
    item2.price=3888
    item2.quantity=500
    console.log(item2)

    //accssing notation
    console.log(item.price)


//changed item

item.price=2600
console.log(item.price)

item.return=true
console.log(item)

//square bracket notation

console.log(item['price'])

let key='price'
item[key]=2500
console.log(item)

 value={
    name:'mk',
    quantity:1,
    price:3322,
    buy:function(){
        console.log("items will be added")
        
    },
    addToList(){
        console.log("item added")
        value.buy()  
        value.addToList()
    }
  
}




  
}
{
    function posible(num){
        return num>-7
    }
    console.log(posible(-4))

    function add(a,b){
        return a*b
    }
    console.log(add(5,6))

    function divi(a,b){
        return a+b

    }
    console.log(divi(7,8))
//holsting:
    console.log(divide(100,5))
    function divide(a,b){
        return a/b
    }
   //default parameter 
   greet('mk')
    function  greet(name){
        console.log("hi da ",name)
    }

    //recrusion
    function factorial(n){
        if (n==1)
           return 1
        return n*factorial(n-1)
    }
  console.log(factorial(5))

  // function expression
  let arr=[2,3,4,5,6]
  let findSum=function(arr){
    let sum=0
    for(let val of arr){
        sum+=val
    }
    return sum
}
console.log(findSum(arr))

 let namearr=['mk','harry','muthu','krish']
 let findarr=(namearr)=>{
    let sum=''
    for(let val of namearr){
        sum+=val
    }
    return sum
 }
 console.log(findarr(namearr))
 // arrow function
let volume=(l,b,h)=>{return l*b*h}
console.log(volume(4,5,3))

let age=[23,53,64,63,73]
let agearr=(age)=>{
    let sum=0
    for(let val of age){
    sum+=val
    }
    return sum
}
   console.log(agearr(age))


   //area of circle
   let area = r =>Math.PI*r*r
   console.log(area(5))
   //variable argument

let prod =function(...args){
    let sum=1
    for(let val of args){
        sum*=val
    }
    return sum
}
console.log(prod(5,3,5,6))

//another method
let product=function(){
    let sum=1
    for(i=0;i<arguments.length;i++){
        sum*=arguments[i]
        return sum
    }
    
}
  console.log(product(3,3,2,1,))

  //generators

  function*indexgenerator(){
    let index=1
    while(true){
        yield index++
    }
  }
  const gen=indexgenerator();
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)



}

//call back
{
    function greetconsole(name){
        console.log('hi',name)  
    
    }
    function greetdisplay(name){
        const head=document.querySelector('h1')
        head.innerHTML='hello' + name
    }
    
    function greet(callback){
        callback('Muthu')
    }
    greet(greetconsole)
    greet(greetdisplay)
    
}
{
arr=['muth','harry','krish']

arr.forEach(print)

function print(val){
    console.log(val)
}
arr.forEach((val,index,arr)=>{
 arr[index] =val.toUppercase
    })
    console.log(arr)
}


dep = ['ECE','CSE','MECH','CIVIL']

dep.forEach(val=>{
    const opt = document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendChild(opt)
   
}); 

//map
let priceUSD=[10,35,10]
let priceINR=priceUSD.map(x=>x*83)
console.log(priceINR)


let veg=[20,87,45]
let farmer=veg.map(x=>x*5)
console.log(farmer)

const input=[{name:'muthu',age:23},
{name:'harry',age:20},
{name:'selva',age:46},
{name:'mk',age:12},
{name:'krish',age:64}
]
const name=input.map(x=>x.name)
console.log(name)

//filter
const age=[35,200,120,233,23,52,63,46]
const lesttThan100=age.filter(a=>a>100)
console.log(lesttThan100)

//Reduce

cost=[100,35,62,34,63,75]
const total=cost.reduce((total,el)=>total+el
)
console.log(total)

let arr2=[
    ["a","b","c"],
    ["c","d","e"],
    ["e","f","g"],
];
console.log(arr2.flat())
let cTotal=arr2.flat().reduce(
    (accumulator,curval)=>{
        if(accumulator[curval])
           accumulator[curval]++
        else
          accumulator[curval]=1
        return accumulator
    }

,{});
console.log(cTotal)


function outer(name){
    let outervar="muthu"
    function inner(name){
        let innervar="krishnan"
        console.log("innervariable",innervar)
        console.log("outervariable",outervar)

    }
    return inner
}
callq=outer("muthu")
callq("harry")


function makeAdder(x){
    return function(y){
        return x*y
    }
}
let add=makeAdder(5)
console.log(add(1))
let add100=makeAdder(100)
console.log(add100(20))

//set
{

let arr=[2,3,2,23,34,4,7,8,88,9,99,9,8,4,3,3]
let myset1=new Set(arr)
console.log(arr)
console.log(myset1.has(9))
}
{
    let myset2=new Set()
    myset2.add(2)
    myset2.add(3)
    myset2.add(4)
    myset2.add(6)
    myset2.add(7)
    myset2.add(8)
    myset2.add("hi muthu have a nice day")
    myset2.add(['name',"muthu"])
    console.log(myset2)
}
//map
let map1=new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('c',1)
console.log(map1)
map1.set('a',3)
console.log(map1.size)
console.log(map1.has('b'))
for (let i of map1){
    console.log(i)
}
let array=Array.from(map1)
console.log(array)
for (let [k,v] of map1){
    console.log(v,k)
}
for (let k of map1.keys()){
    console.log(k)
}
//forEach
map1.forEach((v,k)=>{
    console.log("key",k,'value',v)
})

//2d array
let kvarr=[['a',1],['b',2]]
let map3=new Map(kvarr)
console.log(map3)
for(let i=0;i<kvarr.length;i++){
    console.log(kvarr[i])
}*/


class User(){
    constructor (name,age){
        this.name=name;
        this.age=age;
        }
    login(){
        console.log('hi',this.name)
        console.log("your logged in")
        }
    logout(){
        console.log('hi',this.name)
        console.log('your logout successfully')
        }
    
    }
    let userone=new User('muthu',23)
    let usertwo=new User('harry',22)