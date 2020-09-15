document.addEventListener("DOMContentLoaded", () => {
  
  
  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const tasks = document.querySelector('#tasks')

      const form = e.target
      

      const taskLi = document.createElement('li')
      const description = form[0].value
      
      taskLi.innerHTML = `
      <span> ${description} </span> 
      <button id=btn> x </button>
      `
      
      tasks.append(taskLi)
    })
  }

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.matches('#btn')){
       const button = e.target
       const buttonLi = button.parentElement
       buttonLi.remove()
      }
    })
  }

  

  clickHandler()
  submitHandler()
});




// 1). As a user, I should be able to type a task into the input field.


// 2). As a user, I should be able to click some form of a submit button.


// 3). As a user, the task string that I provided should appear on the DOM after the submit button has been activated.


// ## Stretch Deliverables:

// If you finish early, try to implement one or more of the following:

// 4). A delete function that will remove tasks from your list


// 5). A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)