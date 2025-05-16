import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import PropTypes from 'prop-types';

const PatientChart = (props) => {
  const {data} = props;
  console.log("Dataset ",data);
  
  useEffect(() => {
    if (document.querySelector('#patient-chart')) {
      const sColStackedOptions = {
        chart: {
          height: 230,
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '15%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        series: [
          {
            name: '',
            color: '#2E37A4',
            data: data,
          },
          // {
          //   name: '',
          //   color: '#00D3C7',
          //   data: [13, 23, 20, 8, 13, 27, 30, 25, 10, 15, 20, 20],
          // },
        ],
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
      };

      const chart = new ApexCharts(
        document.querySelector('#patient-chart'),
        sColStackedOptions
      );

      chart.render();
    }
  }, []);

  return <div id="patient-chart"></div>;
};

PatientChart.propTypes = {
  data: PropTypes.array,
};

export default PatientChart;