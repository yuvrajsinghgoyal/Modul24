const orr=[12,2,2,5,4,6,];
function callback(num){
    return num*2;
}

function db(arr,callback){
    const db=arr.map((num)=>{
        return callback(num)
    })
    return db
}

const dbs=db(orr,callback)
console.log(dbs)