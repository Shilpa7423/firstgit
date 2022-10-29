const posts=[{title:'Post1',body:'This is post one',createdAt:new Date().getTime()},
{title:'Post2',body:'This is post two',createdAt:new Date().getTime()}];
let id=0;
function showPost()
{
   clearInterval(id);
   id=setInterval(()=>{
    let output="";
    for(let i=0;i<posts.length;i++)
      {
         output+=`<li>${posts[i].title}-last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago </li>`;
      }
    document.body.innerHTML=output;
   },1000);
    
}
showPost();
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
   callback();},6000);

}

createPost3({title:'Post3',body:'This is post three'},showPost);

createPost4({title:'Post4',body:'This is post four'},showPost);
