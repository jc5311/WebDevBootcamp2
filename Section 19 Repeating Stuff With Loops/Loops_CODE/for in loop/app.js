const testScores = 
{
    keenan: 80,
    damon: 67,
    kim: 89
}

for (let person in testScores)
{
    console.log(`${person} scored ${testScores[person]}`);
}