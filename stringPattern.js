const arr=["J","A","V","A","S","C","R","I","P","T"]
var str=""
var j=0
var i=0
for(var i=0;i<arr.length;i++){
    j=0

    for(const value of arr){
        
        if(j<=i){

            str=str+value
        }

        j=j+1
    }

    str=str+"\n"
        
}
console.log(str)