//assignment 30
/*MAKE AN ARRAY OF 5 OR MORE USER NAME AND ONE SHOULD BE  NAME ADMIN
let user_NAME : String[] = [`ADMIN`,`FATMA1122`,`KAINAT5566`,`ALIRAZA6677`,`SAMINA8899`,`HADI7799`]
//WRITE SPECIAL MESSAGE TO USER NAME ADMIN HELLO ADMIN WOULD YOU LIKE TO SEE A STATUS REPORT
//WRITE GREETING MESSAGE TO EACH THAT THANK YOU FOR LOGIN
for(let i = 0;i <user_NAME.length;i++ ){
if(user_NAME[i]==`ADMIN`){
console.log(`hello`,user_NAME[i],`would you like to see a status report`)
}
else{
    console.log(`dear`,user_NAME[i],`thank you for login`)
}
}*/
//assignment 31 add an if test to ex 30 to make sure list is not empty 
//if the list is empty print a message we need to find some user
//remove all of username from your array make sure message is printed
var user_NAME = ["ADMIN", "FATMA1122", "KAINAT5566", "ALIRAZA6677", "SAMINA8899", "HADI7799"];
user_NAME = [];
console.log(user_NAME);
if (user_NAME) {
    console.log("we need to find some user");
}
else {
    console.log("we have user");
}
