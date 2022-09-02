// 0-32 = F
// 33-39 = E
// 40-49 = D
// 50-59 = C
// 60-69 = B
// 70-79 = A-
// 80-89 = A
// 90-99 = A+
// 100 = Golden A+

var meherinResult = 200;

if(meherinResult<33 && meherinResult>0){
    console.log("You are failed!!");
}
else if(meherinResult>=33 && meherinResult<40){
    console.log("You got E grade");
}
else if(meherinResult>=40 && meherinResult<50){
    console.log("You got D grade");
}
else if(meherinResult>=50 && meherinResult<60){
    console.log("You got C grade");
}
else if(meherinResult>=60 && meherinResult<70){
    console.log("you got B grade");
}
else if(meherinResult>=70 && meherinResult<80){
    console.log("you got A- grade");
}
else if(meherinResult>=80 && meherinResult<90){
    console.log("You got A grade");
}
else if(meherinResult>=90 && meherinResult<99){
    console.log("You got A+");
}
else if(meherinResult == 100){
    console.log("Congratulations you got Golden A+");
}
else{
    console.log("Please enter Valid number")
}