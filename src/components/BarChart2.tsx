import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const BarChart2: React.FC = () => {
  const chartRef = useRef<Chart<"pie",number[], unknown> | null>(null);

  // Dummy data for income and total expense
  const income = 1000; // Example income value
  const totalExpense = 500; // Example total expense value

  useEffect(() => {
    const ctx = document.getElementById('Char') as HTMLCanvasElement;

    if (ctx && !chartRef.current) {
      const config: ChartConfiguration<'pie'> = {
        type: 'pie',
        data: {
          labels: ['Income', 'Total Expense'], // Labels for income and total expense
          datasets: [
            {
              label: '',
              data: [income, totalExpense], // Data for income and total expense
              backgroundColor: [
                'rgba(75, 192, 192, 0.5)', // Green with opacity for income
                'rgba(255, 99, 132, 0.5)' // Red with opacity for total expense
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)', // Green for income
                'rgba(255, 99, 132, 1)' // Red for total expense
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      chartRef.current = new Chart(ctx, config);
    } else if (chartRef.current) {
      // Update chart data if it already exists
      chartRef.current.data.datasets[0].data = [income, totalExpense];
      chartRef.current.update();
    }
  }, []);

  return (
    <div className="lg:h-96 lg:w-96 sm:h-[330px] sm:w-[280px] md:h-[320px]">
      <canvas id="Char"></canvas>
    </div>
  );
};

export default BarChart2;
