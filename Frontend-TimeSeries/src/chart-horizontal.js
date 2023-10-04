import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
  } from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
  );
const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const Horizontalchart =() => {
    const [timeSeriesData, setTimeSeriesData] = useState([]);
    const [data, setData] = useState({
        labels:['variable1','variable2', 'variable3', 'variable4', 'variable5', 'variable6', 'variable7', 'variable8','variable9','variable10','timestamp'],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'http://localhost:5000/api/timeseries'
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.id);
                dataSet2.push(val.postId)
                labelSet.push(val.name)
            }
            // Example data
            const TimeStampData = [
            { timestamp: '2023-10-01', value: 10 },
            { timestamp: '2023-10-02', value: 20 },
            { timestamp: '2023-10-01', value: 30 },
            { timestamp: '2023-10-02', value: 40 },
            { timestamp: '2023-10-01', value: 50 },
            { timestamp: '2023-10-02', value: 60 },
            { timestamp: '2023-10-01', value: 70 },
            { timestamp: '2023-10-02', value: 80 },
            { timestamp: '2023-10-01', value: 90 },
            { timestamp: '2023-10-02', value: 100 },
            
          ];
          setTimeSeriesData(TimeStampData);

            setData({labels:['variable1','variable2', 'variable3', 'variable4', 'variable5', 'variable6', 'variable7', 'variable8','variable9','variable10','timestamp'],
                datasets: [
                  {
                    label: 'Dataset ID',
                    data:dataSet1,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(99, 132, 0.5)',
                  },
                  {
                    label: 'Dataset ID2',
                    data:dataSet2,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 235, 0.5)',
                  },
                  {
                    label: 'Variable 1',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable1),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 2',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable2),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 3',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable3),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 4',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable4),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 5',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable5),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 6',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable6),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 7',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable7),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 8',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable8),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 9',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable9),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'Variable 10',
                    data: timeSeriesData.map((dataPoint) => dataPoint.variable10),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                  {
                    label: 'timestamp',
                    data: timeSeriesData.map((dataPoint) => dataPoint.value),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                  },
                ],
              })
            console.log("arrData", dataSet1, dataSet2)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])

    // const options = {
    //   scales: {
    //     x: {
    //       type: 'time', // Corrected property name
    //       time: {
    //         unit: 'day',
    //       },
    //     },
    //     y: {
    //       // adjust y-axis options as needed
    //     },
    //   },
    // };
    
   
    return(
        <div style={{width:'80%', height:'50%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options}/>
         </div>)
}
export default Horizontalchart;