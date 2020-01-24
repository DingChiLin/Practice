$("#score_form").submit((e) => {
    e.preventDefault();
    const scores = $("input[name='score[]']").map(function(){return parseInt($(this).val());}).get();
    const url = "calculate";
    $.ajax({
        type: "POST",
        url,
        data: {scores},
        success: function(data) {
            document.getElementById("result").innerHTML = data.number;
        },
        error: function(err) {
            console.log(err);
            alert(err.responseText)
        }
    });
})