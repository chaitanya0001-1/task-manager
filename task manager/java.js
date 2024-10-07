document.addEventListener('DOMContentLoaded', function() {
    const attendanceChart = document.getElementById('attendanceChart').getContext('2d');
    const dailyAttendanceChart = document.getElementById('dailyAttendanceChart').getContext('2d');

    // Attendance Comparison Chart
    new Chart(attendanceChart, {
        type: 'line',
        data: {
            labels: ['01 Aug', '02 Aug', '03 Aug', '04 Aug', '05 Aug', '06 Aug', '07 Aug'],
            datasets: [{
                label: 'Attendance',
                data: [85, 90, 80, 88, 92, 87, 91],
                borderColor: '#ff6b6b',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Daily Attendance Chart
    new Chart(dailyAttendanceChart, {
        type: 'bar',
        data: {
            labels: ['CSE', 'ECE', 'EEE', 'Mech', 'Civil'],
            datasets: [{
                label: 'Attendance %',
                data: [86, 92, 88, 79, 85],
                backgroundColor: '#ff6b6b'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero
                    document.addEventListener('DOMContentLoaded', function() {
                        // Attendance Comparison Chart
                        const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
                        const attendanceChart = new Chart(attendanceCtx, {
                            type: 'line',
                            data: {
                                labels: ['01 Aug', '02 Aug', '03 Aug', '04 Aug', '05 Aug', '06 Aug', '07 Aug'],
                                datasets: [{
                                    label: 'Attendance',
                                    data: [85, 90, 80, 88, 92, 87, 91],
                                    borderColor: '#ff6b6b',
                                    backgroundColor: 'rgba(255, 107, 107, 0.2)',
                                    fill: true,
                                    tension: 0.1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        max: 100
                                    }
                                },
                                responsive: true,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top'
                                    }
                                }
                            }
                        });
                    
                        // Daily Attendance Chart
                        const dailyAttendanceCtx = document.getElementById('dailyAttendanceChart').getContext('2d');
                        const dailyAttendanceChart = new Chart(dailyAttendanceCtx, {
                            type: 'bar',
                            data: {
                                labels: ['CSE', 'ECE', 'EEE', 'Mech', 'Civil'],
                                datasets: [{
                                    label: 'Attendance %',
                                    data: [86, 92, 88, 79, 85],
                                    backgroundColor: '#ff6b6b',
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        max: 100
                                    }
                                },
                                responsive: true,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top'
                                    }
                                }
                            }
                        });
                    }),

                    document.addEventListener('DOMContentLoaded', async function() {
    const attendanceChart = new Chart(attendanceCtx, {
        type: 'line',
        data: {
            labels: [], // Start with empty labels
            datasets: [{
                label: 'Attendance',
                data: [], // Start with empty data
                borderColor: '#ff6b6b',
                backgroundColor: 'rgba(255, 107, 107, 0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });

    // Fetch data from an API and update the chart
    const response = await fetch('https://example.com/api/attendance-data');
    const data = await response.json();

    attendanceChart.data.labels = data.labels; // Update labels
    attendanceChart.data.datasets[0].data = data.attendance; // Update data
    attendanceChart.update(); // Re-render chart with new data
}),
// Assuming you've already created the chart and stored it in a variable called attendanceChart

// New data you want to add
