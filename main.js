// JavaScript for Chart 
const ctx = document.getElementById('patientsChart').getContext('2d');

const patientsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'New Patients',
                data: [50, 70, 40, 60, 45, 70, 65, 75, 55, 80, 60, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue fill
                borderColor: 'rgba(54, 162, 235, 1)', // Darker blue line
                borderWidth: 2,
                fill: true,
                tension: 0.4 // Smooth curve
            },
            {
                label: 'Return Patients',
                data: [30, 50, 25, 45, 35, 55, 50, 60, 45, 65, 50, 55],
                borderColor: 'rgba(0, 204, 0, 1)', // Green line
                borderWidth: 2,
                fill: false,
                tension: 0.4 // Smooth curve
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to fit the smaller container
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#333', // Label color
                    font: {
                        size: 10 // Smaller font for legend
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10 // for x-axis labels
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)' // Light grid lines
                },
                ticks: {
                    font: {
                        size: 10 // for y-axis labels
                    }
                }
            }
        }
    }
});


const patientsGenderCtx = document.getElementById('patientsGender').getContext('2d');
var patientsGender = new Chart(patientsGenderCtx, {
    type: 'pie',  // Define the chart type as 'pie'
    data: {
        labels: ['Male', 'Female', 'Kids'], 
        datasets: [{
            label: 'Patients by Gender',
            data: [50, 40, 10], // Example data (50% Male, 40% Female, 10% Kids)
            backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'], // Colors for the segments
            hoverOffset: 4,  // Hover effect for segments
        }]
    },
    options: {
        responsive: true, // Make the chart responsive
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
        },
    }
});

// JavaScript for Calendar
document.addEventListener('DOMContentLoaded', () => {
    const monthYearElement = document.getElementById('monthYear');
    const datesElement = document.getElementById('dates');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentDate = new Date();

    const updateCalendar = () => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const totalDays = lastDay.getDate();
        const firstDayIndex = (firstDay.getDay() + 6) % 7; // Adjust to start from Monday

        // Set the month and year in the header
        monthYearElement.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        let datesHTML = '';

        // Fill in the previous month's days
        const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
        for (let i = firstDayIndex; i > 0; i--) {
            datesHTML += `<div class="date inactive">${prevMonthDays - i + 1}</div>`;
        }

        // Fill in the current month's days
        for (let i = 1; i <= totalDays; i++) {
            const isActive = new Date(currentYear, currentMonth, i).toDateString() === new Date().toDateString();
            datesHTML += `<div class="date ${isActive ? 'active' : ''}">${i}</div>`;
        }

        // Fill in the next month's days
        const remainingDays = 42 - (firstDayIndex + totalDays); // Ensure 6 rows
        for (let i = 1; i <= remainingDays; i++) {
            datesHTML += `<div class="date inactive">${i}</div>`;
        }

        datesElement.innerHTML = datesHTML;
    };

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    updateCalendar();
});



