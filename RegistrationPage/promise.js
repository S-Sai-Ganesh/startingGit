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
    return new Promise((resolve, reject) => {
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
                deletePost().catch((e)=>{console.log(e);});
                post4();
            });
        });});
}).catch(err => console.log(err));


function post4() {
    createPost({title: 'Post four',body: 'This is post four',createdAt: new Date()}).then(() => {
    getPosts();

    setTimeout(() => {
    deletePost().then(getPosts).catch((er) => {console.log(er);});
    },1000); });

}

// **Youtuber code** \\
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {setTimeout(resolve,2000, 'Good Bye');});

// Promise.all([promise1,promise2,promise3]).then((val) => {console.log(val);});
