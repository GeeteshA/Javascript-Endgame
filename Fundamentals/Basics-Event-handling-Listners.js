// Event Handling: Event listeners, addEventListener(), event delegation, bubbling, capturing

// Event listner Perform an operation when get triggered by an input
document.getElementById('button').addEventListener('click',function(){
    alert('Button clicked')
})

/* Event Delegation: It is a technique that perform single event listener on parent element to manage events to its
   child elemnts, Instead of attaching multiple listners to child element we can apply one single listner to its parent 
   or common ancestor  */
   document.querySelector('.button-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        console.log(`Button clicked: ${event.target.textContent}`);
    }
});


/*  */