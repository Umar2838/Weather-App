var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var date = new Date()


var Date_time = document.getElementById("date_time");

Date_time.innerHTML = days[date.getDay()] + ", " +  month[date.getMonth()] + " " +date.getDate()

function addZero(x, n) {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  }
  
var time = document.getElementById("time")
var hours = addZero(date.getHours(),2)
var Minute = addZero(date.getMinutes(),2)

time.innerHTML = hours + ":" + Minute