// 0-32 = F
// 33-39 = E
// 40-49 = D
// 50-59 = C
// 60-69 = B
// 70-79 = A-
// 80-89 = A
// 90-99 = A+
// 100 = Golden A+

let studentMarks = 30;

switch (studentMarks){
    case studentMarks<33 && studentMarks>0:
    console.log("Sorry you failed");
    break;
    case studentMarks>=33 && studentMarks<39:
    console.log("You got E Grade");
    break;
    default:
        console.log("please enter valid number");
}
