// Error Handling: try, catch, finally, custom errors, throwing errors

// Error handling ensures that code execution can continue or gracefully terminate even when error is occured

// -> Try and Catch: allows you to catch all errors during that block
try{
  let num = 10;
  console.log(num.toUpperCase());
}
catch(error){
    console.log('An error occured', error.message);
}
// finally block runs after try&catch blocks, regardless of all error
finally{
    console.log("Execution Successful")
}

// Fetching Data-->

async function fetchData(url) {
    try{
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`HTTP error, ${response.status}`)
    }

    const data = await response.json()
    console.log("Data", data)
    }
    catch(error){
        console.log("Error occured,", error.message)
    }
    finally{
        console.log("Code execution successfully")
    }
}
fetchData("https://jsonplaceholder.typicode.com/posts/1")