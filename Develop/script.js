
//1. get date and append to html
var date=moment().format('dddd, MMMM Do YYYY');
//2. get currenthour (so we can later add present future or past)
var currentHour=moment().format('HH:MM');    //9

$("#currentDay").append(date);
$("#currentTime").append(currentHour);

//3.dynamically append text area
    //a. an array of hours 
    var timeArray=[09,10,11,12,13,14,15,16,17];
    var timeDisplay = ["9:00am","10:00am","11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm"]
    var reverseTime = timeArray.reverse();
    
// <div class="input-group mb-3">
//     <div class="input-group-prepend">
//         <span class="input-group-text" id="9">9</span>
//     </div>
//     <input type="text" class="form-control" aria-label="Username" id="9">
//     <button class="btn btn-outline-secondary" type="button" id="save">Save</button>
// </div> 

$(document).ready(function () {
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
        input.attr("class", "form-control");
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
    
    for(var i = 0; i < (reverseTime.length); i++) {
        span.attr("id", reverseTime[i]++);
    }

    };
});
//a. add styling
//currentHour==timeArray[i] add present class
//currentHour <timeArray[i] add future class
//currentHour >timeArray[i] add past class



//5. create submit fx that fires when you click the submitbtn
    //a. grab user value
    //b. grab current hour
    //c. set to localstorage hour=value (9="Testing")

//6. get the data from localstorage and append it to the associated textarea (shows persistance)
