

function manst(inp,callback){
    const manst=inp.toUpperCase();
    callback(manst);
}

function logString(manst){
    console.log(`manipulated ${manst}`)
}


manst(logString)