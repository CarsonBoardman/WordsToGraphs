//this dictionary hold the functions for each letter and 
//returns it's graph in the position indicated by the arguments
const graphs = {
    ' ': function(x,y){return ""},
    a: function(x,y){return `2x+` +  (2 - 2 * x) + `\\left\\{` + (-1+x) + `\\le x\\le` + (0+x) + `\\right\\}
    -2x+` +  (2 + 2 * x) + `\\left\\{` +  (0+x) + `\\le x\\le` +  (1+x) + `\\right\\}
    y=1\\left\\{` +  (-0.5+x) + `\\le x\\le` +  (0.5+x) + `\\right\\}`},
    b: function(x,y){return `x=` + (-0.5 + x) + `\\left\\{`+ 0 + `\\le y\\le`+ (2) + `\\right\\}
    \\left(x-` + x + `\\right)^{2}+\\left(y-1.5\\right)^{2}=.25\\left\\{` + x + `\\le x\\le` + (1 + x) + `\\right\\}
    y=2\\left\\{` + (-0.5 + x) + `\\le x\\le`+ x +`\\right\\}
    y=1\\left\\{` + (-0.5 + x) + `\\le x\\le`+ x +`\\right\\}
    y=0\\left\\{` + (-0.5 + x) + `\\le x\\le`+ x +`\\right\\}
    \\left(x-` + x + `\\right)^{2}+\\left(y-.5\\right)^{2}=.25\\left\\{`+x+`\\le x\\le`+ (0.5+x) + `\\right\\}`},
    c: function(x,y){return `\\left(x-`+ x +`\\right)^{2}+\\left(y-1\\right)^{2}=1\\left\\{x\\le`+ (x+0.75) +`\\right\\}`},
    d: function(x,y){return `x=`+ (x - 0.5) +`\\left\\{0\\le y\\le2\\right\\}
    y=2\\left\\{`+ (-0.5 + x)+`\\le x\\le`+ x+`\\right\\}
    y=0\\left\\{`+ (-0.5 + x)+`\\le x\\le`+ x+`\\right\\}
    \\left(x-`+x+`\\right)^{2}+\\left(y-1\\right)^{2}=1\\left\\{`+ x + `\\le x\\right\\}`},
    e: function(x,y){return `x=`+(x-0.5)+`\\left\\{0\\le y\\le2\\right\\}
    y=2\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}
    y=1\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.25)+`\\right\\}
    y=0\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}`},
    f: function(x,y){return `y=2\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}
    y=1\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.25)+`\\right\\}
    x=`+(x-0.5)+`\\left\\{0\\le y\\le2\\right\\}`}
}
//main function here:
//outputs a string that can be pasted in desmos graphing calculator
//Sentence {string} - the string to be converted,
//startX, and startY {int} - starting position for the letters in desmos
//only the x positions works as of now
function wordsToGraph(sentence, startX, startY){
    var x = startX;
    var y = startY;
    var returnList = "";
    for (var i=0;i<sentence.length;i++){
        returnList = returnList.concat(graphs[sentence[i]](x, y) + "\n");
        x += 2;
        y +=2;
    }
    return returnList;
}
console.log(wordsToGraph("bc ad ab", -6, 0))