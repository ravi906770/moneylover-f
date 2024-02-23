import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const PieChart = () => {
    const chartRef = useRef<Chart<"pie", number[], unknown> | null>(null);


  useEffect(() => {
    const ctx = document.getElementById('Chart') as HTMLCanvasElement;

    if (ctx && !chartRef.current) {
      const config: ChartConfiguration<'pie'> = {
        type: 'pie',
        data: {
          labels:['Hospital', 'Fule', 'Shopping', 'Food', 'Rent', 'Travel'],
          datasets: [{
            label: 'Expense',
            data: [1000, 1500, 2000, 1800, 2500, 3000],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#8A2BE2',
              '#20B2AA',
              '#FF7F50'
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
      chartRef.current.data.datasets[0].data = [1000, 1500, 2000, 1800, 2500, 3000];
      chartRef.current.update();
    }
  }, [chartRef]);

  return (
    <div className="h-96 w-96">
      <canvas id="Chart"></canvas>
    </div>
  );
};

export default PieChart;
