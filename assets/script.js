/* Each input value is saved individually */
document.getElementById("saveText").value = getSavedValue("saveText"); 
document.getElementById("saveText2").value = getSavedValue("saveText2");
document.getElementById("saveText3").value = getSavedValue("saveText3");
document.getElementById("saveText4").value = getSavedValue("saveText4");
document.getElementById("saveText5").value = getSavedValue("saveText5");
document.getElementById("saveText6").value = getSavedValue("saveText6");
document.getElementById("saveText7").value = getSavedValue("saveText7");
document.getElementById("saveText8").value = getSavedValue("saveText8");
document.getElementById("saveText9").value = getSavedValue("saveText9");
document.getElementById("saveText10").value = getSavedValue("saveText10");
document.getElementById("saveText11").value = getSavedValue("saveText11"); 

/* Sourced from GeeksforGeeks 
 Digital clock for top of page for inputting */
function showTime() {
 let time = new Date();
 let hour = time.getHours();
 let min = time.getMinutes();
 am_pm = "AM";

 if (hour > 12) {
  hour-= 12;
  am_pm = "PM";
 }
 if (hour == 0) {
  hr = 12;
  am_pm = "AM";
 }

 hour = hour < 10 ? "0" + hour : hour;
 min = min < 10 ? "0" + min : min;

 let currentTime = hour + ":"
  + min + am_pm;

 document.getElementById("clock")
  .innerHTML = currentTime;
}
showTime(); 

moment(Date);
$("#curentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
var currentTime = moment();
currentTime = currentTime.startOf('hour');
var beforeTime = moment().startOf('day').add(7, 'hours');


var time7am = beforeTime.add(0, 'h');
time7am = time7am.format('hh:mm A');
$('.block1').text(time7am);

var time8am = beforeTime.add(1, 'h');
time8am = time8am.format('hh:mm A');
$('.block2').text(time8am);

var time9am = beforeTime.add(1, 'h');
time9am = time9am.format('hh:mm A');
$('.block3').text(time9am);

var time10am = beforeTime.add(1, 'h');
time10am = time10am.format('hh:mm A');
$('.block4').text(time10am);

var time11am = beforeTime.add(1, 'h');
time11am = time11am.format('hh:mm A');
$('.block5').text(time11am);

var time12pm = beforeTime.add(1, 'h');
time12pm = time12pm.format('hh:mm A');
$('.block6').text(time12pm);

var time1pm = beforeTime.add(1, 'h');
time1pm = time1pm.format('hh:mm A');
$('.block7').text(time1pm);

var time2pm = beforeTime.add(1, 'h');
time2pm = time2pm.format('hh:mm A');
$('.block8').text(time2pm);

var time3pm = beforeTime.add(1, 'h');
time3pm = time3pm.format('hh:mm A');
$('.block9').text(time3pm);

var time4pm = beforeTime.add(1, 'h');
time4pm = time4pm.format('hh:mm A');
$('.block10').text(time4pm);

var time5pm = beforeTime.add(1, 'h');
time5pm = time5pm.format('hh:mm A');
$('.block11').text(time5pm);

function theTime() {
 time7am = moment().startOf('day').add(7, 'hours');
 currentTime = currentTime.startOf('hour');
 if (currentTime.isAfter(time7am)) {
  $('.form7am').addClass('past');
 }
 else if (currentTime.isBefore(time7am)) {
  $('.form7am').addClass('future');
 }
 else if (currentTime.isSame(time7am)) {
  $('.form7am').addClass('present');
 };

 time8am = moment().startOf('day').add(8, 'hours');
 if (currentTime.isAfter(time8am)) {
  $('.form8am').addClass('past');
 }
 else if (currentTime.isBefore(time8am)) {
  $('.form8am').addClass('future'); 
 }
 else if (currentTime.isSame(time8am)) {
  $('.form8am').addClass('present');
 };

 time9am = moment().startOf('day').add(9, 'hours');
 if (currentTime.isAfter(time9am)) {
  $('.form9am').addClass('past');
 }
 else if (currentTime.isBefore(time9am)) {
  $('.form9am').addClass('future'); 
 }
 else if (currentTime.isSame(time9am)) {
  $('.form9am').addClass('present');
 };

 time10am = moment().startOf('day').add(10, 'hours');
 if (currentTime.isAfter(time10am)) {
  $('.form10am').addClass('past');
 }
 else if (currentTime.isBefore(time10am)) {
  $('.form10am').addClass('future'); 
 }
 else if (currentTime.isSame(time10am)) {
  $('.form10am').addClass('present');
 };

 time11am = moment().startOf('day').add(11, 'hours');
 if (currentTime.isAfter(time11am)) {
  $('.form11am').addClass('past');
 }
 else if (currentTime.isBefore(time11am)) {
  $('.form11am').addClass('future'); 
 }
 else if (currentTime.isSame(time11am)) {
  $('.form11am').addClass('present');
 };

 time12pm = moment().startOf('day').add(12, 'hours');
 if (currentTime.isAfter(time12pm)) {
  $('.form12pm').addClass('past');
 }
 else if (currentTime.isBefore(time12pm)) {
  $('.form12pm').addClass('future'); 
 }
 else if (currentTime.isSame(time12pm)) {
  $('.form12pm').addClass('present');
 };

 time1pm = moment().startOf('day').add(13, 'hours');
 if (currentTime.isAfter(time1pm)) {
  $('.form1pm').addClass('past');
 }
 else if (currentTime.isBefore(time1pm)) {
  $('.form1pm').addClass('future'); 
 }
 else if (currentTime.isSame(time1pm)) {
  $('.form1pm').addClass('present');
 };

 time2pm = moment().startOf('day').add(14, 'hours');
 if (currentTime.isAfter(time2pm)) {
  $('.form2pm').addClass('past');
 }
 else if (currentTime.isBefore(time2pm)) {
  $('.form2pm').addClass('future'); 
 }
 else if (currentTime.isSame(time2pm)) {
  $('.form2pm').addClass('present');
 };

 time3pm = moment().startOf('day').add(15, 'hours');
 if (currentTime.isAfter(time3pm)) {
  $('.form3pm').addClass('past');
 }
 else if (currentTime.isBefore(time3pm)) {
  $('.form3pm').addClass('future'); 
 }
 else if (currentTime.isSame(time3pm)) {
  $('.form3pm').addClass('present');
 };

 time4pm = moment().startOf('day').add(16, 'hours');
 if (currentTime.isAfter(time4pm)) {
  $('.form4pm').addClass('past');
 }
 else if (currentTime.isBefore(time4pm)) {
  $('.form4pm').addClass('future'); 
 }
 else if (currentTime.isSame(time4pm)) {
  $('.form4pm').addClass('present');
 };

 time5pm = moment().startOf('day').add(17, 'hours');
 if (currentTime.isAfter(time5pm)) {
  $('.form5pm').addClass('past');
 }
 else if (currentTime.isBefore(time5pm)) {
  $('.form5pm').addClass('future'); 
 }
 else if (currentTime.isCurrent(time5pm)) {
  $('.form5pm').addClass('present');
 };
}
theTime();

var x = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
 var dataHour = localStorage.getItem(x[i]);
 $(".form" + x[i]).val(dataHour);
}


function saveValue(event){
    var id = event.id; 
    var val = event.value; 
    localStorage.setItem(id, val);
}
function getSavedValue (value){
    if (!localStorage.getItem(value)) {
        return ""; 
    }
    return localStorage.getItem(value);
}


$(".saveInfo").click(function(event) {
 event.preventDefault();
 var newValue = $(this).siblings(".form-control").val();
 console.log("It saved!");
 var listItem = $(this).parent().data("hour");

 localStorage.setItem(listItem, newValue);
})

