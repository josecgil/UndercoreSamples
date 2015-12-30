/* Underscore Samples */

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

//without() removes values from the arrays
var colorsWithoutRed=_(moreColors).without("red");
var colorsWithoutRedAndBlue=_(moreColors).without("red", "blue");

//union() joins arrays
var evenMoreColors=_(moreColors).union(["red", "brown", "pink"]);
