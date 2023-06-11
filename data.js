var scheduleData;

function fetchData(filename) {
    var path = "json/";
    var url = path + filename;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            scheduleData = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();

}
