console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(()=> resolve('ticket'),3000);
    })


    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));

    const addButter = new Promise((resolve,reject)=> resolve('butter'));
    //2.Task.promise\\
    const getCoolDrinks = new Promise((resolve,reject)=>resolve('cooldrinks'));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket} `);
    console.log('husband: we should go in'); console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn} `); console.log('husband: we should go in'); console.log('wife: I need butter on my popcorn');

    let butter = await addButter;
    let cooldrinks = await getCoolDrinks; //Task2.await

    console.log(`husband: i got some ${butter} on popcorn and ${cooldrinks}`); 
    console.log("husband: anything else darling?");
    console.log('wife: lets got we are getting late'); 
    console.log("husband: thank you for the reminder *grins**");

    return ticket;
}

preMovie().then((result) => {
    console.log(`person3: shows ${result}`);
});

console.log('person4: shows ticket');
console.log('person5 shows ticket');