fetchBooks = function (url) { // here the data and url are not hardcoded anymore
    return $.ajax({
        type: "GET",
        url: "https://localhost:8080",
        dataType: "json",
        contentType: "application/json;charset=utf-8"
    }).success(function (data) {
        console.log(data);
    })
        .fail(function (sender, message, details) {
            alert("Sorry, something went wrong!");
        });
}