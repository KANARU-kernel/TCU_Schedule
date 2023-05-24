var scheduleData;

function fetchData() {
    var url = "https://m1t-h4ku.github.io/TCU_Schedule/data.json";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            scheduleData = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();

}

fetchData();
