const posts=[{title:'Post1',body:'This is post one',createdAt:new Date().getTime()},
{title:'Post2',body:'This is post two',createdAt:new Date().getTime()}];

function showPost()
{
   setTimeout(()=>{
    let output="";
    posts.forEach((post)=>{output+=`<li>${post.title}-last updated ${post.createdAt}</li>`;});
    document.body.innerHTML=output;
   },1000);
    
}

function createPost3(post,callback)
{
 setTimeout(()=>{
   posts.push({...post,createdAt:new Date().getTime()});
   callback();},2000);

}
function createPost4(post,callback)
{
 setTimeout(()=>{
   posts.push({...post,createdAt:new Date().getTime()});
   callback();},2000);

}

createPost3({title:'Post3',body:'This is post three'},showPost);

createPost4({title:'Post4',body:'This is post four'},showPost);
