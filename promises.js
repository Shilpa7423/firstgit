const posts=[{title:'Post1',body:'This is post one'},
{title:'Post2',body:'This is post two'}];

function showPost()
{
   setTimeout(()=>{
    let output="";
    posts.forEach((posti)=>{output+=`<li>${posti.title}</li>`;});
    document.body.innerHTML=output;
   },1000);
    
}

function createPost3(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error)
        {
            resolve();
        } 
        else
        {
            reject('Error:something wrong');
        }
    },2000);});
}
function createPost4(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        document.body.innerHTML=post.title;
        const error=false;
        if(!error)
        {
            resolve();
        } 
        else
        {
            reject('Error:something wrong in post4');
        }
    },10000);});
}
function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0)
            {
                const lastElement=posts.pop();
                resolve(lastElement);
            }
            else{
                reject('Empty array');
            }
    },1000);});
}
createPost3({title:'Post3',body:'This is post three'})
  .then(()=>{
    showPost() 
    deletePost()
.then(()=>{
    showPost()
    deletePost()
.then(()=>{
    showPost()
    deletePost()
.then(()=>{
    showPost()
    deletePost().then(()=>{
}).catch(err=>console.log(err))
}).catch(err=>console.log(err))
}).catch(err=>console.log(err))
}).catch(err=>console.log(err))
}).catch(err=>console.log(err))


createPost4({title:'Post4',body:'This is post four'})
  .then(()=>{
    showPost() 
    deletePost()
    .then(()=>{
        showPost() 
    deletePost()
    })  .catch(err=>console.log(err))
})
    .catch(err=>console.log(err))