

$(document).ready(function () {
//1. get date and append to html
var date=moment().format('dddd, MMMM Do YYYY');
//2. get currenthour (so we can later add present future or past)
var currentHour=parseInt(moment().format('HH'));    //9

//$(".form-control#9").append(localStorage.getItem("9"));


$("#currentDay").append(date);
$("#currentTime").append(currentHour);

//input text variable
var saveEvent;
//time of event variable
var saveHr;
var eventList = [];

//3.dynamically append text area
    //a. an array of hours 
    var timeArray=[9,10,11,12,13,14,15,16,17];
    var timeDisplay = ["9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm"]
    
// <div class="input-group mb-3">
//     <div class="input-group-prepend">
//         <span class="input-group-text" id="9">9</span>
//     </div>
//     <input type="text" class="form-control" aria-label="Username" id="9">
//     <button class="btn btn-outline-secondary" type="button" id="save">Save</button>
// </div> 

//4. run a for loop to dynamically add the rest of the text area

    for(var j = 0; j < timeDisplay.length; j++) {
        var d1=$("<div>");
        //<div></div>
        d1.attr("class","input-group mb-3");
        //<div class="input-group mb-3"></div>
        var d2=$("<div>");
        //<div></div>
        d2.attr("class","input-group-prepend");
        var span =$("<span>");
        span.attr("class","input-group-text");
        
        span.text(timeDisplay[j]);
        //<span></span>
       
        var input=$("<input>");

        span.attr("id", timeArray[j]);
        input.attr("type","text");
        input.attr("aria-label","UserName");
        input.attr("aria-describedby", "basic-addon1")
 
        if (currentHour > timeArray[j]) {
            input.attr("class", "form-control input past "+timeArray[j]);
        }
        if(currentHour==timeArray[j]){
            input.attr("class", "form-control input present "+timeArray[j]);
        }
        if(currentHour < timeArray[j]) {
            input.attr("class", "form-control input future "+timeArray[j]);
        }
        //add id so user can grab time and userinput in the same area
        input.attr("id", timeArray[j]);
        //<input>
        var btn=$("<button>");
        btn.attr("class", "btn btn-outline-secondary");
        btn.attr("type", "button");
        btn.attr("id", "saveBtn");
        btn.text("Save");
        
        d2.append(span);
        d1.append(d2);
        d1.append(input);
        d1.append(btn);

        $(".container").append(d1);
    }

    //5. create submit fx that fires when you click the submitbtn
    //a. grab user value
    //b. grab current hour
    //c. set to localstorage hour=value (9="Testing")

    $(".btn").click(function (event) {
        event.preventDefault();
        saveEvent = $(this).siblings(".input").val().trim();
        // grab saveEvent value to set as "value" in localStorage
        //localStorage.setItem(saveHr, JSON.stringify(saveEvent));
        //user's value
        console.log(saveEvent);
        //the current hour
        console.log($(this).siblings(".input").attr("id"))
        //localstroage.setItem(hour, userinput)
        localStorage.setItem($(this).siblings(".input").attr("id"), JSON.stringify(saveEvent));

    });

//6. get the data from localstorage and append it to the associated textarea (shows persistance)
    //local.setAttribute(value, localstorage data at 9)
    $(".9").attr("value",JSON.parse(localStorage.getItem("9")));
    $(".10").attr("value",JSON.parse(localStorage.getItem("10")));
    $(".11").attr("value",JSON.parse(localStorage.getItem("11")));
    $(".12").attr("value",JSON.parse(localStorage.getItem("12")));
    $(".13").attr("value",JSON.parse(localStorage.getItem("13")));
    $(".14").attr("value",JSON.parse(localStorage.getItem("14")));
    $(".15").attr("value",JSON.parse(localStorage.getItem("15")));
    $(".16").attr("value",JSON.parse(localStorage.getItem("16")));
    $(".17").attr("value",JSON.parse(localStorage.getItem("17")));
});

