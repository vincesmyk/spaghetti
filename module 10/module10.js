//other var
var arrP=["milk", "eggs","gum","eggplant","carrot","sweets","pie","pizza","eggnog","toy","garlic bread","bread"];
var priceP=[1,2,3,4,5,6,7,8,9,10,11,12];
var arrD=["milk", "eggs","gum","eggplant","carrot","sweets","pie","pizza","eggnog","toy","garlic bread","bread","wings","pesto","naan bread","cinnamon rolls"];
var priceD=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var tot=0;
var items=0;
var summ=[];
var pSumm = [];
var errMessage = "must type pickup or delivery";
//survey
var name = prompt("What is your full name");
var address = prompt("Give two addresses");
var city = prompt("What city are you in?")
var state = prompt("what state are you in?")
var zip = prompt("give a zipcode");
var username = prompt("create a username");
var password = prompt("create a password");
var login = prompt("log in, place space between username and password")
//login
function loginLogic()
{
    if (login = username +" " +password){
        alert("logged in");
    }
    else{
        alert("log in fail");
    }
}
loginLogic();
items=prompt("how many items are you buying");
var pOrD=prompt("pickup or delivery?");
for(let i = 0; i < items; i++){
    if(pOrD=="pickup"){
        console.log(arrP);
        var selection = prompt("type an item to buy");
        for(let j = 0; j<arrP.length;j++){
            if(arrP[j]==selection){
                tot += priceP[j];
                summ += arrP[j];
                pSumm+=priceP[j];
            }
        }
    }else if(pOrD=="delivery"){
        console.log(arrD);
        var selection = prompt("type an item to buy");
        for(let count = 0; count<arrD.length;count++){
            if(arrD[count]==selection){
                tot += priceD[count];
                summ += arrD[count];
                pSumm += priceD[count];
            }
        }
    }
}
if(pOrD!== "delivery"){
    if(pOrD!== "pickup"){
        alert("must type in delivery or pickup");}
}
var payment = prompt("apple, credit, or venmo?")
//Page showing payments
console.log(pOrD);
console.log(summ);
console.log(pSumm);
console.log(tot + (.07 * tot)+9.99);
console.log("Delivery time is 5:45 P.M");
