/* Underscore Samples */

//https://www.youtube.com/watch?v=r4XlAoRYBXI&list=PLC0FtARyNdQLOkHbwD7_nULNkMtn2P-td&index=3

//Arrays

var colors=["red", "green", "blue", "white", "black"];

//first() retrieves the first n elements
var red=_.first(colors); //first item
var redGreenYellow=_.first(colors, 3);

//last() retrieves the last n elements
var black = _.last(colors);
var whiteBlack = _.last(colors, 2);


//another syntax
red=_(colors).first(); //first item
black = _(colors).last(); //last item


//compact() removes all falsy values
var items=[2, "", true, false, 0, 1, null, "text", NaN];
var nonFalsyItems=_.compact(items); //or _(items).compact()

//flatten() flats a complex array of arrays
var complexArray=[ [1,2,3] , [ ['A','B','C'] , [true, false] ] ];
var flatArray= _(complexArray).flatten();

var moreColors=["red", "green", "blue", "white", "black", "red"];

//without() removes values from the array
var colorsWithoutRed=_(moreColors).without("red");
var colorsWithoutRedAndBlue=_(moreColors).without("red", "blue");

//union() joins arrays
var evenMoreColors=_(moreColors).union(["red", "brown", "pink"]);
var evenMoreColors2=_(moreColors).union(["red", "brown"], ["pink", "yellow"]);

//intersection() get common values between arrays
var numbers=[1,2,3,4,5];

var commonNumbers=_(numbers).intersection([3,5,7,9]); //[3,5]

//intersection() get common values between arrays

commonNumbers=_(numbers).difference([3,5,7,9]); //[3,5]

//difference() get values from the first array
//that are not present in other arrays

var differentNumbers=_(numbers).difference([3,5,7,9]); //[1,2,4]


//uniq() removes duplicates in array

var values=[1,1,2,2,2,3,4,5,5,5,5];

var uniqValues=_(values).uniq(); //[1,2,3,4,5]

//range generates a range of numbers as an array
var range0to19=_.range(20); //[0, 1, 2, 3, ... 15, 16, 17, 18, 19]
var range10to19=_.range(10,20); //[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
var range0to19Step2=_.range(0,20,2); //[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]


colors=["red", "green", "blue", "white", "black", "blue"];

//indexOf returns the first index of the value in the array
var indexOfBlue=_(colors).indexOf("blue"); //2

//indexOf returns the last index of the value in the array
var lastIndexOfBlue=_(colors).lastIndexOf("blue"); //5

//map returns a new array transformed item by item to another array

var colorsUpperCase=_(colors).map(function(color, index, colors) {
    return color.toUpperCase();
});

//you can use map also with object properties
var carlos={
    name:"Carlos",
    age: 42,
    height: 180,
    hairColor: black
};

var carlosKeysUpperCase=_(carlos).map(function(value, key, props) {
    return key.toUpperCase();
});

//reduce() converts some array to just one value

numbers=[ 2, 4, 6, 8, 10];
var sum =_(numbers).reduce(function(lastSum, number, index){
    return lastSum + number;
});


var words=["Hello", "Jose", "Carlos"];
var phrase=_(words).reduce(function(phrase, word, index){
    return phrase + " " + word;
});

//find() finds the first element that matches the condition of the predicate

var names=["Josep", "Maria", "Mar", "Eloisa", "Eladio"];

var firstBigName=_(names).find(function(name){
    return name.length>5;
});


//filter() finds all the elements that matches the conditions of the predicate
var allBigNames=_(names).filter(function(name){
    return name.length>5;
});

//reject() is the exact opposite of filter()
var allButBigNames=_(names).reject(function(name){
    return name.length>5;
});

//contains() returns true if a value is in an array
var containsJosep=_(names).contains("Josep"); //true
var containsMarga=_(names).contains("Marga"); //false

//some() returns true if one or more elements matches the conditions of the predicate
var thereAreSomeBigNames=_(names).some(function(name){ //true
    return name.length>5;
});

//every() returns true if all elements matches the conditions of the predicate
var allAreBigNames=_(names).every(function(name){ //false
    return name.length>5;
});

//invoke() calls a function to create a new array with changed values
numbers=[1,2,3];
var powNumbers=_(numbers).invoke(function (exponent) {
    return Math.pow(this, exponent);
}, 2);

var clients=[{ name: "Carlos", age: 42}, { name: "Serena", age: 32 }];
var newClients=_(clients).invoke(function () {
    var newClient=_(this).clone();
    newClient.age++;
    newClient.name=this.name.toUpperCase();
    return newClient;
});

//pluck() extract one property for complex objects to a simple array

var clientNames=_(clients).pluck("name");


//shuffle() shuffle values in random order
numbers=_.range(20);
var shuffledNumbers=_(numbers).shuffle();


//each() iterates for every item in the array
_(numbers).each(function(number, index, numbers){
    //console.log(number);
});

//where() finds products by property values
var products=[
    {title:"t-shirt", color:"white", categoryId: 1},
    {title:"Pant", color:"red", categoryId: 2},
    {title:"Jean", color:"blue", categoryId: 2},
    {title:"Dress", color:"red", categoryId: 3}
];

var redProducts=_(products).where({color:"red"});

//findWhere() like where() but finds only the first item by property values
var firstRedProduct=_(products).findWhere({color:"red"});



