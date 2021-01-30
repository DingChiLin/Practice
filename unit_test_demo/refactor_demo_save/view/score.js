$("#score_form").submit((e) => {
    e.preventDefault();
    const scores = $("input[name='score[]']").map(function(){return parseInt($(this).val());}).get();
    const url = "calculate";
    $.ajax({
        type: "POST",
        url,
        data: {scores},
        success: function(data) {
            document.getElementById("result").innerHTML = 'Flunk Count: ' + data.number;
            document.getElementById("result").style.color = 'red';
            document.getElementById("result").style.fontSize = '30px';
        },
        error: function(err) {
            console.log(err);
            alert(err.responseText)
        }
    });
})