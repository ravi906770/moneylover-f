import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

type Props = {}

const FakeChart3: React.FC<Props> = () => {
    const chartRef = useRef<Chart<"line", unknown> | null>(null);

    useEffect(() => {
        const ctx = document.getElementById('Chart3') as HTMLCanvasElement;

        if (ctx && !chartRef.current) {
            const config: ChartConfiguration<'line'> = {
                type: 'line', // Set the chart type to line
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // Dummy labels
                    datasets: [{
                        label: 'Expense',
                        data: [100, 200, 300, 400, 500, 600,1000,2000,100,50,100,600], // Dummy data
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)'
                          ], // Line color
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                          ],
                        // Do not fill the area under the line
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            chartRef.current = new Chart(ctx, config);
        } else if (chartRef.current) {
            chartRef.current.data.datasets[0].data =  [100, 200, 300, 400, 500, 600,1000,2000,100,50,100,600]; // Update with dummy data
            chartRef.current.data.labels =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Update with dummy labels
            chartRef.current.update();
        }
    }, []);

    return (
        <div className="h-120 w-250">
            <canvas id="Chart3"></canvas>
        </div>
    );
};

export default FakeChart3;
