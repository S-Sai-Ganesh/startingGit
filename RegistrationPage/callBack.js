var posts = [
    {title: 'Post one', body: 'This is post one', createdAt: new Date()},
    {title: 'Post two', body: 'This is post two', createdAt: new Date()}
]

function getPosts(){
    setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} created ${Math.floor(new Date()/1000) - Math.floor(post.createdAt/1000)} seconds ago </li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post,callBack){
    setTimeout(() => {
        post.createdAt = new Date();
        posts.push(post);
        callBack();
    }, 2000);
}



createPost({title: 'Post three',body: 'This is post three'},getPosts);

createPost({title: 'Post four', body:'This is post four'}, createPost);

console.log(posts);