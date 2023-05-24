var scheduleData;

function fetchData() {
    var url = "https://kanaru-kernel.github.io/TCU_Schedule/data.json";

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
