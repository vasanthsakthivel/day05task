//2. for the above JSON, Literate over all for loops(for, forin, for Off, for each)
//for loop
var json = [{
    "name": "guvi",
    "age":"32",
    "language": "english"
},
{
    "name": "greek",
    "age":"33",
    "language": "tamil"
}
]
for(var i=0; i<json.length; i++){
    var obj1= json[i];
    console.log(obj1.name);
    console.log(obj1.age);
    console.log(obj1.language);
}
//op:
//guvi
//32
//english
//greek
//33
//tamil

//for in


var json = {
    "name": "guvi",
    "age":"32",
    "language": "english"
}
for(var key in json){
    console.log(key.json[key]);
}

op:
//name guvi
//age 32
//language english

//for Of

const arr= [10,20,30,40];
for( let key of arr ){
    console.log(key);
}

//op:
//10
//20
//30
//40

//for each;

var res=[10,20,30,40];
res.forEach(Element=>console.log(Element));

//op:
//10
//20
//30
//40`