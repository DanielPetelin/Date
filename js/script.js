document.querySelector('button').onclick = function() {
    var dateStart = document.querySelector('#start-date').value;    
    var dateEnd = document.querySelector('#end-date').value;   
    dateStart = Date.parse(dateStart); 
    dateEnd = Date.parse(dateEnd);
    var out = document.querySelector('#out');
    if (dateStart < dateEnd) {
        for (var i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
            out.innerHTML += new Date(i).toISOString().substr(0, 10) + '<br>';
        };
    };
};