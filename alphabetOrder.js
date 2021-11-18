const student=[
    {
        name:"Shibin",
        place:"wayanad",
        age:23
    },
    {
        name:"vishnu",
        place:"Calicut",
        age:12
    },
    {
        name:"Arun",
        place:"Kochi",
        age:2

    }
]

console.log(student.sort((num1,num2)=>{
  var namenum1=num1.name.toUpperCase()
  var namenum2=num2.name.toUpperCase()
  if(namenum1<namenum2){
    return -1
  }

  if(namenum1>namenum2){
    return 1
  }
return 0
}));