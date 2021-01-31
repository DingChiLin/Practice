function draw_user_behavior_funnel(behavior_count) {
    var gd = document.getElementById('user_behavior_funnel');
    var data = [{
        type: 'funnel',
        y: ["View", "View Item", "Add to Cart", "Checkout"],
        x: behavior_count,
        // hoverinfo: 'x+percent previous+percent initial'
    }];

    var layout = {margin: {l: 150}, width:600, height: 500}

    Plotly.newPlot('user_behavior_funnel', data, layout);
}

function draw_user_statistic(user_count) {
    var data = [
        {
            x: ['unique_user', 'new_user', 'return_user'],
            y: user_count,
            type: 'bar'
        }
    ];
      
    Plotly.newPlot('user_statistic', data);
}

function init() {
    console.log("YEYEYEYEY");
    $('#datetimepicker').datetimepicker({  
        format: 'YYYY-MM-DD',  
        locale: moment.locale('zh-tw'),
        defaultDate: moment(),
    })
    .on('dp.change', async function(e) {
        console.log(e)
        const date = $('#datetimepicker_input')[0].value
        const data = await Promise.resolve($.ajax('/api/1.0/user/behavior/' + date))
        draw_user_behavior_funnel(data.behavior_count);
        draw_user_statistic(data.user_count);
    })
}

async function main() {
    init();
    const dd = moment().format('YYYY-MM-DD');
    const data = await Promise.resolve($.ajax('/api/1.0/user/behavior/' + dd));
    draw_user_behavior_funnel(data.behavior_count);
    draw_user_statistic(data.user_count);
}
main();