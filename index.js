// Call back Function

// function fetchData(callback) {
//     setTimeout(()=> {
//         const data="Callback Data";
//         callback(data);
//     },2000);
// }

// function myData(data) {
//     console.log(`Processed Data: ${data}`)
// }

// fetchData(myData)



// Promise Here

function fetchData() {
     const myPromiise = new Promise(()=> {
        
     })
     return new Promise((resolve, reject)=> {
         const data="Call back henry accepted";
//         // resolve(data)
         reject(data)
     })
 }

// function myData(data) {
//     console.log(`Processed Data: ${data}`)
// }

// fetchData().then(myData).catch(error=> {
//     console.error('Error',error)
// })



// Async & Wait

 async function myData() {
     try{
        const data =await fetchData();
        console.log(`Processed: ${data}`)
     }catch(error) {
        console.log(`Error: ${error}`)
     }
 }

 myData();
