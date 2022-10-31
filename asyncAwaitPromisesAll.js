console.log("person 1");
console.log("person 2");

async function movie()
{
    const getTicket=  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const a= 'true';
            if(a=='true')
                resolve('person 3 ticket bought');
        else
                reject('ticket sold out not there')
        }
        ,1000)
    });

const getPopcorn=  new Promise((resolve,reject)=>{
        const a= 'true';
        if(a=='true')
            resolve('popcorn bought');
    else
            reject('no popcorn');
});
const getButter=  new Promise((resolve,reject)=>{
    const a= 'true';
    if(a=='true')
        resolve('butter bought');
else
        reject('no butter');
});
const getColdDinks=  new Promise((resolve,reject)=>{
    const a= 'true';
    if(a=='true')
        resolve('Cold drinks bought');
else
        reject('no cold drinks');
});

let ticket=await getTicket;
console.log(`${ticket}`);

let [popcorn,butter,coldDrinks]=await Promise.all([getPopcorn,getButter,getColdDinks])

console.log(`${popcorn},${butter},${coldDrinks}`);

return butter;

}
movie().then((t)=>console.log(t));
console.log("person 4");
console.log("person 5");