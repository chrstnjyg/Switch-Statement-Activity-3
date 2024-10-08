function askDay(){
    let day = prompt("Enter a day of the week:");
    switch (day){
    case "Monday":
        alert("Your task for Monday is: Finish your assignments.");
        break;
    case "Tuesday":
        alert("Your task for Tuesday is: Do your assigned activities in google classroom.");
        break;
    case "Wednesday":
        alert("Your task for Wednesday is: Do household chores.");
        break;
    case "Thursday":
        alert("Your task for Thursday is: Review your notes.");
        break;
    case "friday":
        alert("Your task for Friday is: Plan for next week.");
        break;
    case "Saturday":
        alert("Your task for Saturday is: Practice for Sunday worship.");
        break;
    case "Sunday":
        alert("Your task for Sunday is: Go to church.");
        break;
    default:
        alert("Try again! Please enter a valid day of the week.");
    }
}