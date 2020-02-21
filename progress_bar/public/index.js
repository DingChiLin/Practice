var source = new EventSource('progress');
source.addEventListener('progress', function(e) {
    console.log(e.data);
    const progress = document.getElementById('progress');
    progress.innerText = e.data;
}, false);