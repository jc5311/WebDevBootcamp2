let input = prompt("What would you like to do:").toLowerCase();
let todoList = [];
while(input !== "quit")
{
    if (input === "new")
    {
        input = prompt("Enter your to do item:");
        todoList.push(input);
        console.log(`${input} added to list`);
    }
    else if (input === "list")
    {
        console.log("********");
        for (let i = 0; i < todoList.length; i++)
            console.log(`${i}: ${todoList[i]}`);
        console.log("********");
    }
    else if (input === "delete")
    {
        input = parseInt(prompt("Enter index of what you want to delete:"));
        while(input !== "exit")
        {
            input = parseInt(input);
            if ((input >= 0) && (input < todoList.length))
            {
                todoList.splice(input, 1);
                console.log(`Item at index ${input} removed`);
                break;
            }
            else
            {
                input = prompt("Please enter a valid index (use exit to to stop):");
            }
        }
    }

    input = prompt("What would you like to do?").toLowerCase();
}

console.log("Ok, quitting app");