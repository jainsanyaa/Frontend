export function EventToDo(props){
    //function handleClick(){
      //  alert(`Button clicked! ${props.title}`)
    //}
    function handleSubmit(e){
        e.preventDefault()
        const input = e.target.task.value
        const inputValue = input.trim()
        if(inputValue=="")
        {
            alert("Task can not be empty");
        return;}
        const li=document.createElement("li");
       li.innerHTML = `<span>${inputValue}</span>`



    }
    return(
        <div>
            <h1>Event To Do</h1>
            <button onClick={handleClick}>Click me</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add your task here"/>
                <input type = "submit">Add Task</input>
            </form>
            <ul id = "TaskList" onClick={handleClickList}>
                <li></li>
            </ul>

        </div>
    )
}