var selectedWeekday;
var selectedPeriod;

function updateClassList() {

    var courseSelect = document.getElementById("course");
    courseSelect.innerHTML = ""; // 

    // Userが選択した時間を取得
    var weekdaySelect = document.getElementsByName("weekday");
    var periodSelect = document.getElementsByName("period");
    for (i = 0; i < weekdaySelect.length; i++) {
        if (weekdaySelect[i].checked) {
            selectedWeekday = weekdaySelect[i].value;
        }
    }
    for (i = 0; i < periodSelect.length; i++) {
        if (periodSelect[i].checked) {
            selectedPeriod = periodSelect[i].value;
        }
    }

    var courseNames = [];
    var classList = scheduleData[selectedWeekday][selectedPeriod]
    for (var i = 0; i < classList.length; i++) {
        var course = classList[i].Subject;
        if (!courseNames.includes(course)) {
            courseNames.push(course);
        }
    }

    for (var l = 0; l < courseNames.length; l++) {
        var option = document.createElement("option");
        option.value = l;
        option.textContent = courseNames[l];
        courseSelect.appendChild(option);
    }

    
}

function updateClassInfo() {
    var courseSelect = document.getElementById("course");
    var selectedClass = courseSelect.value;

    // 授業情報を取得
    var selectedSchedule = scheduleData[selectedWeekday][selectedPeriod][selectedClass];

    // 授業情報を表示
    var scheduleDiv = document.getElementById("schedule");
    scheduleDiv.innerHTML = "授業名：" + selectedSchedule.Subject + "<br>教室：" + selectedSchedule.Classroom + "<br>講師：" + selectedSchedule.Teacher;
}

function updateMajor() {
    var majorSelect = document.getElementsByName("Major");
    var selectedMajor;
    for (i = 0; i < majorSelect.length; i++) {
        if (majorSelect[i].checked) {
            selectedMajor = majorSelect[i].value;
        }
    }
    fetchData(selectedMajor + ".json");
    updateClassList();
}

//get current period from time
function getCurrentPeriod() {
    var now = new Date();
    var currentPeriod;
    var currentWeekday = now.getDay();

    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var currentTime = currentHour * 60 + currentMinute;

    if (currentWeekday == 0) {
        currentPeriod = 0;
    } else if (currentTime >= 1120 || currentTime < 660) { // before 11:00
        currentPeriod = 0;
    } else if (currentTime >= 660 && currentTime < 770) { // 11:00 ~ 12:50
        currentPeriod = 1;
    } else if (currentTime >= 770 && currentTime < 920) { // 12:50 ~ 15:20
        currentPeriod = 2;
    } else if (currentTime >= 920 && currentTime < 1030) { // 15:20 ~ 17:10
        currentPeriod = 3;
    } else if (currentTime >= 1030 && currentTime < 1120) { // 17:10 ~ 19:00
        currentPeriod = 4;
    }

    return currentPeriod;
}

//get current weekday from time
//0:Monday, 1:Tuesday, 2:Wednesday, 3:Thursday, 4:Friday, 5:Saturday, 6:Sunday
function getCurrentWeekday() {
    var now = new Date();
    var currentWeekday = now.getDay() - 1;

    return currentWeekday;
}



fetchData("CommonSubject.json");
//execute when page loaded
window.onload = function () {
    //select radio bottom automatically
    var currentPeriod = getCurrentPeriod();
    var currentWeekday = getCurrentWeekday();
    if (currentWeekday == -1) {
        currentWeekday = 0;
    }
    var weekdaySelect = document.getElementsByName("weekday");
    var periodSelect = document.getElementsByName("period");
    weekdaySelect[currentWeekday].checked = true;
    periodSelect[currentPeriod].checked = true;
    //update class list
    updateClassList();
}

