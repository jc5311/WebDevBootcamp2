// if (1 + 1 === 2)
// {
//     console.log("Math still works");
// }

// const dayOfWeek = 'Monday';
// if (dayOfWeek === 'Monday')
// {
//     console.log("I hate Mondays..");
// }
// else if (dayOfWeek === "Saturday")
// {
//     console.log("I love saturday");
// }
// else if (dayOfWeek === "Friday")
// {
//     console.log("Fridays are better after work!");
// }

// 0-5   baby   free
// 5-10  child  $10
// 10-65 adult  $20
// 65+   senior $10
// const age = prompt("enter age: ").toLowerCase();

// if (age <5)
// {
//     console.log("baby = free");
// }
// else if (age < 10)
// {
//     console.log("child = $10");
// }
// else if (age < 65)
// {
//     console.log("adult = $20");
// }
// else
// {
//     console.log("senior = $10");
// }

const password = prompt("please enter a new password");

// password must be 6+ chars
// password cannot include space
if (password.length >= 6)
{
    console.log("password is long enough");
    
}
else
{
    console.log("password to short");
}