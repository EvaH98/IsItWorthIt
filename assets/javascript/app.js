// Is It Worth It
//compare driving vs flying to get from point A to point B

//globals
var gasPrice = 2.536 //$-gallon from aaa.com
var hourValue = 25 //$-hour based on median income in usa
var electricMpg = 83
var compactMpg = 60
var midSizeMpg = 44
var fullSizeMpg = 37
var smallSuvMpg = 34
var largeSuvMpg = 29
var miniVanMpg = 31
var pickUpMpg = 26

//electric time per mile to charge = 0.43 minutes/mile traveled 
//electric cost per mile to charge = 0.04 dollars/mile traveled



//get start and end point from user input



//get car type from user input

//get miles and travel time from google maps api, driving and flying

//get flight cost from google api 

//if gas car picked: 
//((tripMiles / MPG) * gasPrice) = trip cost

//(tripTime * hourValue) = time cost




//if electric car picked:
    //miles to drive * 0.43 = time to charge, add to trip time (very generic, Tesla is much faster)

    //((tripTime + chargeTime)*hourValue) = time cost

    //miles to drive * 0.04 = cost of electricity for trip (very generic).

    //(tripMiles * 0.04) = trip cost


//for flight:
    // trip cost = flight cost
    //time cost = (flight time + 210 minutes of incidental travel time ) * hourValue

























 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAuHU3w5LxmFEAOS4eh_KxQXdyKvpPBX7s",
    authDomain: "is-it-worth-it-36708.firebaseapp.com",
    databaseURL: "https://is-it-worth-it-36708.firebaseio.com",
    projectId: "is-it-worth-it-36708",
    storageBucket: "is-it-worth-it-36708.appspot.com",
    messagingSenderId: "778379783564"
  };
  firebase.initializeApp(config);

