//this dictionary hold the functions for each letter and 
//returns it's graph in the position indicated by the arguments
const graphs = {
    ' ': function(x,y){return ""},
    // a done
    a: function(x,y){return `2x+` +  ((2 - 2 * x) + y) + `\\left\\{` + (-1+x) + `\\le x\\le` + (0+x) + `\\right\\}
    -2x+` +  ((2 + 2 * x) + y)  + `\\left\\{` +  (0+x) + `\\le x\\le` +  (1+x) + `\\right\\}
    y=`+(y+1)+`\\left\\{` +  (-0.5+x) + `\\le x\\le` +  (0.5+x) + `\\right\\}`},
    //b done
    b: function(x,y){return `x=` + (-0.5 + x) + `\\left\\{`+ y + `\\le y\\le`+ (2+y) + `\\right\\}
    \\left(x-` + x + `\\right)^{2}+\\left(y-`+ (y+1.5) + `\\right)^{2}=.25\\left\\{` + x + `\\le x\\le` + (1 + x) + `\\right\\}
    y=`+ (y+2) + `\\left\\{` + (-0.5 + x) + `\\le x\\le`+ x +`\\right\\}
    y=`+ (y+1) + `\\left\\{` + (-0.5 + x) + `\\le x\\le`+ x +`\\right\\}
    y=`+ (y) + `\\left\\{` + (-0.5 + x) + `\\le x\\le`+ x +`\\right\\}
    \\left(x-` + x + `\\right)^{2}+\\left(y-`+(y + .5)+`\\right)^{2}=.25\\left\\{`+x+`\\le x\\le`+ (0.5+x) + `\\right\\}`},
    //c done, x and y
    c: function(x,y){return `\\left(x-`+ x +`\\right)^{2}+\\left(y-`+ (y+1)+`\\right)^{2}=1\\left\\{x\\le`+ (x+0.75) +`\\right\\}`},
    d: function(x,y){return `x=`+ (x - 0.5) +`\\left\\{`+(y)+`\\le y\\le`+(2+y)+`\\right\\}
    y=`+(y+2)+`\\left\\{`+ (-0.5 + x)+`\\le x\\le`+ x+`\\right\\}
    y=`+ y +`\\left\\{`+ (-0.5 + x)+`\\le x\\le`+ x+`\\right\\}
    \\left(x-`+x+`\\right)^{2}+\\left(y-`+(y + 1)+`\\right)^{2}=1\\left\\{`+ x + `\\le x\\right\\}`},
    e: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y)+`\\le y\\le`+(y + 2)+`\\right\\}
    y=`+(y + 2)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}
    y=`+(y + 1)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.25)+`\\right\\}
    y=`+(y)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}`},
    f: function(x,y){return `y=`+(y + 2)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}
    y=`+(y + 1)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.25)+`\\right\\}
    x=`+(x-0.5)+`\\left\\{`+(y)+`\\le y\\le`+(y + 2)+`\\right\\}`},
    g: function(x,y){return `\\left(x-`+x+`\\right)^{2}+\\left(y-`+(y + 1)+`\\right)^{2}=1\\left\\{x\\le`+(x+0.75)+`\\right\\}
    x=`+(x+0.75)+`\\left\\{`+(y + 0.35)+`\\le y\\le`+(y + 1)+`\\right\\}
    y=`+(y + 1)+`\\left\\{`+x+`\\le x\\le`+(x+0.75)+`\\right\\}`},
    h: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y)+`\\le y\\le`+(y+2)+`\\right\\}
    x=`+(x+0.5)+`\\left\\{`+(y)+`\\le y\\le`+(y+2)+`\\right\\}
    y=`+(y+1)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}`},
    i: function(x,y){return `y=`+(y+2)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}
    y=`+(y)+`\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}
    x=`+(x)+`\\left\\{`+(y)+`\\le y\\le`+(y+2)+`\\right\\}`},
    j: function(x,y){return `y=`+(y+2)+`\\left\\{`+(x-0.5)+`<x<`+(x+0.5)+`\\right\\}
    x=`+(x)+`\\left\\{`+(y+0.5)+`<y<`+(y+2)+`\\right\\}
    \\left(x-`+(x-0.5)+`\\right)^{2}+\\left(y-`+(y+0.5)+`\\right)^{2}=.25\\left\\{y<`+(y+0.5)+`\\right\\}`},
    k: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    y=x+` +  ((1.5 - x) + y) + `\\left\\{`+(x-0.5)+`<x<`+(x+0.5)+`\\right\\}
    y=-x+` +  ((0.5 + x) + y) + `\\left\\{`+(x-0.5)+`\\le x\\le`+(x+0.5)+`\\right\\}`},
    l: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    y=`+(y)+`\\left\\{`+(x-0.5)+`<x<`+(x+0.5)+`\\right\\}`},
    m: function(x,y){return `x=`+(x-1)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    x=`+(x+1)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    y=-x+`+((1 + x) + y)+`\\left\\{`+(x-1)+`<x<`+(x)+`\\right\\}
    y=x+`+((1 - x) + y)+ `\\left\\{`+(x)+`<x<`+(x+1)+`\\right\\}`},
    n: function(x,y){return `x=`+(x-0.75)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    x=`+(x+0.75)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    -\\frac{4}{3}x+`+((x*(1.33333))+1+y)+`\\left\\{`+(x-0.75)+`<x<`+(x+0.75)+`\\right\\}`},
    o: function(x,y){return `\\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+1)+`\\right)^{2}=1`},
    p: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    \\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+1.5)+`\\right)^{2}=.25\\left\\{`+(x)+`\\le x\\right\\}
    y=`+(y+1)+`\\left\\{`+(x-0.5)+`<x<`+(x)+`\\right\\}
    y=`+(y+2)+`\\left\\{`+(x-0.5)+`<x<`+(x)+`\\right\\}`},
    q: function(x,y){return `\\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+1)+`\\right)^{2}=1
    y=-x+`+((x+1)+y)+`\\left\\{`+(x+0.5)+`<x<`+(x+1)+`\\right\\}`},
    r: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}
    y=`+(y+1)+`\\left\\{`+(x-0.5)+`<x<`+(x)+`\\right\\}
    y=`+(y+2)+`\\left\\{`+(x-0.5)+`<x<`+(x)+`\\right\\}
    \\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+1.5)+`\\right)^{2}=.25\\left\\{x>`+(x)+`\\right\\}
    -2x+`+((x*2)+1+y)+`\\left\\{`+(x)+`<x<`+(x+0.5)+`\\right\\}`},
    s: function(x,y){return `\\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+0.5)+`\\right)^{2}=.25\\left\\{x>`+(x)+`\\right\\}
    \\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+0.5)+`\\right)^{2}=.25\\left\\{y<`+(y+0.5)+`\\right\\}
    \\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+1.5)+`\\right)^{2}=.25\\left\\{x<`+(x)+`\\right\\}
    \\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+1.5)+`\\right)^{2}=.25\\left\\{y>`+(y+1.5)+`\\right\\}`},
    t: function(x,y){return `y=`+(y+2)+`\\left\\{`+(x-1)+`<x<`+(x+1)+`\\right\\}
    x=`+(x)+`\\left\\{`+(y)+`<y<`+(y+2)+`\\right\\}`},
    u: function(x,y){return `x=`+(x-0.5)+`\\left\\{`+(y+0.5)+`<y<`+(y+2)+`\\right\\}
    x=`+(x+0.5)+`\\left\\{`+(y+0.5)+`<y<`+(y+2)+`\\right\\}
    \\left(x-`+(x)+`\\right)^{2}+\\left(y-`+(y+0.5)+`\\right)^{2}=.25\\left\\{y<`+(y+0.5)+`\\right\\}`},
    v: function(x,y){return `y=2\\left|x-`+(x)+`\\right|+`+(y)+`\\left\\{y<`+(y+2)+`\\right\\}`},
    w: function(x,y){return `-4x+`+((x*4)-2+y)+`\\left\\{`+(x-1)+`<x<`+(x-0.5)+`\\right\\}
    -2\\left|x-`+(x)+`\\right|+`+(y+1)+`\\left\\{`+(x-0.5)+`<x<`+(x+0.5)+`\\right\\}
    4x+`+(((-4)*x)-2+y)+`\\left\\{`+(x+0.5)+`<x<`+(x+1)+`\\right\\}`},
    x: function(x,y){return `\\left|x-`+(x)+`\\right|+`+(y+1)+`\\left\\{`+(x-1)+`<x<`+(x+1)+`\\right\\}
    -\\left|x-`+(x)+`\\right|+`+(y+1)+`\\left\\{`+(x-1)+`<x<`+(x+1)+`\\right\\}`},
    y: function(x,y){return `y=\\left|x-`+(x)+`\\right|+`+(y+1)+`\\left\\{y\\le`+(y+2)+`\\right\\}
    x=`+(x)+`\\left\\{`+(y)+`<y<`+(y+1)+`\\right\\}`},
    z: function(x,y){return `y=`+(y)+`\\left\\{`+(x-1)+`<x<`+(x+1)+`\\right\\}
    y=`+(y+2)+`\\left\\{`+(x-1)+`<x<`+(x+1)+`\\right\\}
    y=x+`+((y-x)+1)+`\\left\\{`+(x-1)+`<x<`+(x+1)+`\\right\\}`},
    ',': function(x,y){return `y=2x-`+((2*x)-y)+`\\left\\{`+(x-0.2)+`\\le x\\le`+(x+0.1)+`\\right\\}`}
    
}
//main function here:
//outputs a string that can be pasted in desmos graphing calculator
//Sentence {string} - the string to be converted,
//startX, and startY {int} - starting position for the letters in desmos
function wordsToGraph(sentence, startX, startY){
    var x = startX;
    var y = startY;
    var returnList = "";
    for (var i=0;i<sentence.length;i++){
        returnList = returnList.concat(graphs[sentence[i]](x, y) + "\n");
        x += 2;
        //y +=2;
    }
    return returnList;
}
console.log(wordsToGraph(`this is a test sentance`, 0,0))
