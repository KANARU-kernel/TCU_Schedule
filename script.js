function getClassList() {

    var courseSelect = document.getElementById("course");
    courseSelect.innerHTML = ""; // 

    // Userが選択した時間を取得
    var weekdaySelect = document.getElementsByName("weekday");
    var periodSelect = document.getElementsByName("period");
    for (i = 0; i < weekdaySelect.length; i++) {
        if (weekdaySelect[i].checked) {
            var selectedWeekday = weekdaySelect[i].value;
        }
    }
    for (i = 0; i < periodSelect.length; i++) {
        if (periodSelect[i].checked) {
            var selectedPeriod = periodSelect[i].value;
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

function getClassInfo() {
    var courseSelect = document.getElementById("course");
    var weekdaySelect = document.getElementById("weekday");
    var periodSelect = document.getElementById("period");
    var selectedClass = courseSelect.value;
    var selectedWeekday = weekdaySelect.value;
    var selectedPeriod = periodSelect.value;

    // 授業情報を取得
    var selectedSchedule = scheduleData[selectedWeekday][selectedPeriod][selectedClass];

    // 授業情報を表示
    var scheduleDiv = document.getElementById("schedule");
    scheduleDiv.innerHTML = "授業名：" + selectedSchedule.Subject + "<br>教室：" + selectedSchedule.Classroom + "<br>講師：" + selectedSchedule.Teacher;
}

