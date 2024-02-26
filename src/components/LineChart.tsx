import React, { useEffect, useRef, useState } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const LineChart = () => {
     const chartRef = useRef<Chart<"line", unknown> | null>(null);


     const [tdata , setTdata] = useState<Number[]>([]);

  useEffect(() => {
    const ctx = document.getElementById('LineChart') as HTMLCanvasElement;

    if (ctx && !chartRef.current) {
      const config: ChartConfiguration<'line'> = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Expenses',
            data: [1000, 1500, 2000, 1800, 2500, 3000, 2200, 1800, 2000, 2800, 3200, 2000],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#8A2BE2',
              '#20B2AA',
              '#FF7F50',
              '#6495ED',
              '#ADFF2F',
              '#D2691E',
              '#00BFFF',
              '#FFD700',
              '#8B008B'
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
      chartRef.current.data.datasets[0].data = [1000, 1500, 2000, 1800, 2500, 3000, 2200, 1800, 2000, 2800, 3200, 2000];
      chartRef.current.update();
    }
  }, [chartRef]);

  return (
    <div className="h-96 w-190">
      <canvas id="LineChart"></canvas>
    </div>
  );
};

export default LineChart;
