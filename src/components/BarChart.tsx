import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

type Props = {};

const BarChart = (props: Props) => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (!chartRef.current) {
      const config: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
          labels: ['Hospital', 'Fule', 'Shopping', 'Food', 'Rent', 'Travel'],
          datasets: [{
            label: 'Expense',
            data: [1000, 1500, 2000, 1800, 2500, 3000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
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
    } else {
      chartRef.current.data.datasets[0].data = [1000, 1500, 2000, 1800, 2500, 3000];
      chartRef.current.update();
    }
  }, []);

  return (
    <div className="h-96 w-96 mt-20">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default BarChart;
