import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

type Props = {}

const FakeChart3: React.FC<Props> = () => {
    const chartRef = useRef<Chart<"line", unknown> | null>(null);

    useEffect(() => {
        const ctx = document.getElementById('Chart3') as HTMLCanvasElement;

        if (ctx && !chartRef.current) {
            const config: ChartConfiguration<'line'> = {
                type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Dummy labels for week
        datasets: [{
            label: 'Weekly Expense',
            data: [50, 100, 150, 200, 250, 300, 200], // Dummy data for week
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y1' // Assigning to the right y-axis
        }, {
            label: 'Monthly Expense',
            data: [100, 200, 300, 400, 500, 600, 1000, 2000, 100, 50, 100, 600], // Dummy data for month
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            yAxisID: 'y' // Assigning to the left y-axis
        }]
    },
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Week vs Month'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                },
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        }
    },
            };

            chartRef.current = new Chart(ctx, config);
        }else if (chartRef.current) {
            chartRef.current.data.datasets[0].data = [50, 100, 150, 200, 250, 300, 200]; // Update weekly expense data
            chartRef.current.data.datasets[1].data = [100, 200, 300, 400, 500, 600, 1000, 2000, 100, 50, 100, 600]; // Update monthly expense data
            chartRef.current.data.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Update with dummy labels for week
            chartRef.current.update(); // Update the chart
        }
    }, []);

    return (
        <div className="h-120 w-250">
            <canvas id="Chart3"></canvas>
        </div>
    );
};

export default FakeChart3;
