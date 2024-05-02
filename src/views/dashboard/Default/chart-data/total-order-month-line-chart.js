const ChartDataMonth = (subscribersGainedData, months) => {
  return {
    type: 'line',
    height: 90,
    options: {
      chart: {
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      yaxis: {
        min: 0,
        max: Math.max(...subscribersGainedData), // Update max value dynamically
      },
      xaxis: {
        categories: months // Include months dynamically
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: 'Subscribers Gained'
        },
        marker: {
          show: false
        }
      }
    },
    series: [
      {
        name: 'Subscribers Gained',
        data: subscribersGainedData
      }
    ]
  };
};

export default ChartDataMonth;
