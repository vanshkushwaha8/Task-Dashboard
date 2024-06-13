// JavaScript to handle the chart rendering

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('invoiceChart').getContext('2d');
    var invoiceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'This week',
                data: [12000, 19000, 30000, 5000, 20000, 30000, 45000],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            }, {
                label: 'Last week',
                data: [15000, 29000, 25000, 12000, 24000, 32000, 38000],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    var ctx2 = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Weighted',
                data: [5000, 10000, 15000, 20000, 25000, 30000, 35000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Won',
                data: [3000, 7000, 12000, 15000, 22000, 28000, 34000],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
});
