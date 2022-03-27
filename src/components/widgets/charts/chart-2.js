import {useEffect, useState} from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '../../chart';


// Random color in hex format
const randomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Chart2 = ({data,titleChart,whichAlgo}) => {
  const theme = useTheme();
  const chartSeries = [];
  let colors = [];

  for (let i = 0; i < whichAlgo.length; i++) {
    if(whichAlgo[i] ==true){
      colors.push(randomColor());
    }
  }

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [...colors],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      horizontalAlign: 'right',
      labels: {
        colors: theme.palette.text.secondary
      },
      position: 'top',
      show: true
    },
    markers: {
      hover: {
        size: undefined,
        sizeOffset: 2
      },
      radius: 2,
      shape: 'circle',
      size: 4,
      strokeColors: [...colors],
      strokeWidth: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '1000',
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
        axisBorder: {
          color: theme.palette.divider,
          show: true
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
    
  };

  if(whichAlgo[0] ==true){
    chartSeries.push({
      data: {...data[0]}[0],
      name: 'Qucik Sort'
    })
  }

  if(whichAlgo[1] ==true){
    chartSeries.push({
      data: {...data[1]}[0],
      name: 'Merage Sort'
    })
  }

  if(whichAlgo[2] ==true){
    chartSeries.push({
      data: {...data[2]}[0],
      name: 'Insertion Sort'
    })
  }

  if(whichAlgo[3] ==true){
    chartSeries.push({
      data: {...data[3]}[0],
      name: 'Dual Pivot Quick Sort'
    })
  }

  if(whichAlgo[4] ==true){
    chartSeries.push({
      data: {...data[4]}[0],
      name: 'Hybrid'
    })
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Card>
        <CardHeader title={titleChart} />
        <CardContent>
          <Chart
            height={500}
            options={chartOptions}
            series={chartSeries}
            type="line"
          />
        </CardContent>
      </Card>
    </Box>
  );
};
