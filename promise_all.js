function createPost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.innerHTML="post createdd yayy!";
        const error=false;
        if(!error)
        {
           
            resolve("post createdd yayy!");
        } 
        else
        {
            reject('Error:something wrong');
        }
    },1000);});
}
function updateLastUserActivityTime()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.innerHTML="123490";
        const error=false;
        if(!error)
        {
            
            resolve("123490");
        } 
        else
        {
            reject('wrong time');
        }
    },2000);});
}
const promise1= createPost();
const promise2= updateLastUserActivityTime();

Promise.all([promise1,promise2]).then(val=>console.log(val)).catch(err=>console.log(err));
