let maximum = parseInt(prompt("Enter the maximum number"));

while(!maximum)
{
    maximum = parseInt(prompt("Please enter a valid number"));
}

const randomNumber = Math.floor(Math.random() * maximum) + 1;
console.log(randomNumber);

let guess = prompt("Enter your first guess");
let attempts = 1;
while(parseInt(guess) !== randomNumber)
{
    if (guess === 'q')
        break;

    if (parseInt(guess) > randomNumber)
    {
        guess = prompt("Too high! Enter a new guess:");
    }
    else
    {
        guess = prompt("Too low! Enter a new guess:");
    }
    attempts++;
}

console.log(`It took you ${attempts} attempts`);