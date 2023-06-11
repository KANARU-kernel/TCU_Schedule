var scheduleData;

function fetchData(filename, callback) {
    var path = "json/";
    var url = path + filename;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            scheduleData = JSON.parse(xhr.responseText);
            callback();
        }else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            alert("json load error");
            // console.log("json load error");
        }
    };
    xhr.send();

}
