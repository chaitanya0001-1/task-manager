document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid', 'interaction' ],
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
            {
                title: 'Holiday',
                start: '2024-08-25',
            },
            {
                title: 'Meeting',
                start: '2024-08-30',
                end: '2024-08-31'
            }
        ]
    });

    calendar.render();
});
calendar.on('dateClick', function(info) {
    var title = prompt('Enter Event Title:');
    var event = {
        title: title,
        start: info.dateStr,
        allDay: true
    };
    calendar.addEvent(event);
});
calendar.on('eventClick', function(info) {
    if (confirm("Are you sure you want to delete this event?")) {
        info.event.remove();
    }
});
#calendar {
    max-width: 900px;
    margin: 0 auto;
}
.fc-event{
    background-color:#ff3333;
    border: none;
}
events: function(fetchInfo, successCallback, failureCallback) {
    fetch('/api/events')
        .then(response => response.json())
        .then(data => successCallback(data))
        .catch(error => failureCallback(error));
}
