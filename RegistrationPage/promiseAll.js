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

function createPost(post){
    const create = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        },2000);
        
    });

    const updateLastUserActivityTime = new Promise((resolve,reject) => {
        setTimeout(() => {        
        resolve(); 
        },1000,updateTimer=new Date());
    });

    return Promise.all([create,updateLastUserActivityTime]).then(() => {
        console.log('After new post');
        console.log('posts >>',posts);
        console.log('user activity time',updateTimer);
    });
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const len = posts.length;
            if(len!=0) {
                posts.pop();
                resolve();
            }
            else {
                reject('Array is empty now');
            }
        },1000);
    });
}

createPost({title: 'Post three',body: 'This is post three', createdAt: new Date()}).then( () => {getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() =>{
                    getPosts();
                    deletePost().then(() => {
                        getPosts();
                        post4();
})})})}).catch(err => console.log(err));



function post4() {
    createPost({title: 'Post four',body: 'This is post four',createdAt: new Date()}).then(() => {getPosts();
    deletePost().then(console.log(posts))});
}
