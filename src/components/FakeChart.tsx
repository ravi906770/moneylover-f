import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

type Props = {}

const FakeChart: React.FC<Props> = () => {
    const chartRef = useRef<Chart<"doughnut", number[], unknown> | null>(null);

    useEffect(() => {
        const ctx = document.getElementById('Chart') as HTMLCanvasElement;

        if (ctx && !chartRef.current) {
            const config: ChartConfiguration<'doughnut'> = {
                type: 'doughnut',
                data: {
                    labels: ['food', 'shopping', 'rent','education','travel','hospital'], // Dummy labels
                    datasets: [{
                        label: 'Expense',
                        data: [300, 200, 500,400,700,900], // Dummy data
                        backgroundColor: [
                            '#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2', '#20B2AA', '#FF7F50'
                        ]
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
            chartRef.current.data.datasets[0].data = [300, 200, 500,400,700,900]; // Update with dummy data
            chartRef.current.data.labels =['food', 'shopping', 'rent','education','travel','hospital']; // Update with dummy labels
            chartRef.current.update();
        }
    }, []);

    return (
        <div className="w-1/2 mx-auto">
            <canvas id="Chart"></canvas>
        </div>
    );
};

export default FakeChart;
