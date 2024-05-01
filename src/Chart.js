// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';

// const SimpleBarChart = ({ data }) => {
//   const chartRef = useRef();
//   const [chart, setChart] = useState(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');
//     if (chart) {
//       chart.destroy();
//     }
//     const newChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: data.map(item => item.name),
//         datasets: [
//           {
//             label: 'Floor',
//             data: data.map(item => item.floor),
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1
//           },
//           {
//             label: 'Butter',
//             data: data.map(item => item.butter),
//             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 1
//           },
//           {
//             label: 'Sugar',
//             data: data.map(item => item.sugar),
//             backgroundColor: 'rgba(255, 206, 86, 0.2)',
//             borderColor: 'rgba(255, 206, 86, 1)',
//             borderWidth: 1
//           },
//           {
//             label: 'Egg',
//             data: data.map(item => item.egg),
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }
//         ]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//     setChart(newChart);

//     return () => {
//       newChart.destroy();
//     }
//   }, [data]);

//   return (
//     <div>
//       <canvas ref={chartRef} width="400" height="400"></canvas>
//     </div>
//   );
// }

// export default SimpleBarChart;


import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const SimpleBarChart = () => {
  const chartRef = useRef();
  const [chart, setChart] = useState(null);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chart) {
      chart.destroy();
    }
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: currentData.map(item => item.name),
        datasets: [
          {
            label: 'Floor',
            data: currentData.map(item => item.floor),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Butter',
            data: currentData.map(item => item.butter),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Sugar',
            data: currentData.map(item => item.sugar),
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          },
          {
            label: 'Egg',
            data: currentData.map(item => item.egg),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    setChart(newChart);

    return () => {
      newChart.destroy();
    }
  }, [currentData]);

  const handleButtonClick = (data) => {
    setCurrentData(data);
  }

  return (
    <div>
        <div>
        <button onClick={() => handleButtonClick(croissants)}>Croissants</button>
        <button onClick={() => handleButtonClick(pancakes)}>Pancakes</button>
        <button onClick={() => handleButtonClick(cookies)}>Cookies</button>
        <button onClick={() => handleButtonClick(doughnuts)}>Doughnuts</button>
      </div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
      
    </div>
  );
}

const croissants = [
  { name: 'Croissants', floor: 2, butter: 3, sugar:  1, egg: 1 }
];

const pancakes = [
  { name: 'Pancakes', floor: 1, butter: 2, sugar: 1, egg: 2 }
];

const cookies = [
  { name: 'Cookies', floor: 3, butter: 2, sugar: 2, egg: 1 }
];

const doughnuts = [
  { name: 'Doughnuts', floor: 2, butter: 3, sugar: 2, egg: 1 }
];

export default SimpleBarChart;
