import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Algum valor",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
      }}
    >
      <Line data={data} />
      <p>a</p>
    </div>
  );
};
export { LineChart };
