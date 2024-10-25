import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import getOpcoesData from '../service/getOpcoes';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Grafico = ({ ticker }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const optionsData = await getOpcoesData(ticker);
      setChartData({
        labels: optionsData.map(option => option.expiration),
        datasets: [
          {
            label: 'Preço das Opções',
            data: optionsData.map(option => option.price),
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
          },
          {
            label: 'Volatilidade Implícita',
            data: optionsData.map(option => option.impliedVolatility),
            borderColor: 'rgba(255,99,132,1)',
            fill: false,
          }
        ],
      });
    };

    fetchData();
  }, [ticker]);

  return (
    <div className="grafico-container">
      <Line data={chartData} />
    </div>
  );
};

export default Grafico;