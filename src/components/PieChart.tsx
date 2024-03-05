import React, { useEffect, useRef, useState } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import axios from 'axios';

type Category = {
  category : string,
  totalAmount : number
}

interface Props{
  categoryData:{ category: string; totalAmount: number }[],
  fetchCategory:()=>void
}


const PieChart :React.FC<Props> = ({categoryData,fetchCategory}) => {
    const chartRef = useRef<Chart<"pie", number[], unknown> | null>(null);

    const color = ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2', '#20B2AA', '#FF7F50', '#32CD32', '#FFD700']

    // const fetch = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:5000/api/v1/categoryPayment');
    //     const data = response.data.formatData;
    //     // const sortedData = data.sort((a: { month: string }, b: { month: string }) => {
    //     //   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //     //   return months.indexOf(a.month) - months.indexOf(b.month);
    //     // });;
    //     setCategoryData(data);
    //     // console.log(data)
    //   } catch (error) {
    //     console.error('Failed to fetch transaction data:', error);
    //   }
    // }


    useEffect(()=>{
   
      fetchCategory();
     },[])


  useEffect(() => {
    const ctx = document.getElementById('Chart') as HTMLCanvasElement;

    if (ctx && !chartRef.current ) {
      const config: ChartConfiguration<'pie'> = {
        type: 'pie',
        data: {
          labels:categoryData.map(item=>item.category),
          datasets: [{
            label: 'Expense',
            data: categoryData.map(item=>item.totalAmount),
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
    } else if (chartRef.current && categoryData.length > 0) {
      chartRef.current.data.datasets[0].data = categoryData.map(item=>item.totalAmount);
      chartRef.current.data.labels = categoryData.map(item => item.category)
      chartRef.current.update();
    }
  }, [categoryData]);

  return (
    <div className="h-96 w-96">
      <canvas id="Chart"></canvas>
    </div>
  );
};

export default PieChart;
