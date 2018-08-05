$(document).ready(function () {
    $(document).on("click", "#add-btn", function (event) {
        event.preventDefault();
        let you = {
            name: $("#name").val().trim(),
            image: $("#image").val().trim(),
            scores: [$("#outdoors").val().trim(),
            $("#dogs").val().trim(),
            $("#cats").val().trim(),
            $("#reading").val().trim(),
            $("#documentaries").val().trim(),
            $("#rain").val().trim(),
            $("#children").val().trim(),
            $("#steak").val().trim(),
            $("#veggies").val().trim(),
            $("#movies").val().trim()]
        };
        console.log("YOUR SCORES: ", you.scores);
        console.log("YOU: ", you)
        $.post("/api/friends", you, function (data) {
            console.log("You've been added!", you);
            // change modal src to new bff name, image
            $("#friendName").text(data.name);
            console.log('best match name: ', data.name)
            $("#friendImage").attr("src", data.image);
            console.log('best match image src', data.image)
            // clear form after submission
            $("#name").val("");
            $("#image").val("")
            $("#outdoors").val(1);
            $("#dogs").val(1);
            $("#cats").val(1);
            $("#reading").val(1);
            $("#documentaries").val(1);
            $("#rain").val(1);
            $("#children").val(1);
            $("#steak").val(1);
            $("#veggies").val(1);
            $("#movies").val(1);
        });
    });
});