import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HomeButton from "../../components/HomeButton";
import Card from "../../components/Card";

const options = {
  colors: ["red", "yellow", "green"],
  chart: {
    type: "pie",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  title: {
    text: undefined,
  },
  tooltip: {
    backgroundColor: "white",
    shared: true,
    useHTML: true,
    formatter: function (tooltip) {
      if (this.series.name === "Sample B") {
        return `<div style="display: flex; flex-direction: column; padding: 5px;">
                    <span style="text-align: center;  padding-top: 5px">${this.key}</span>
                    <b style="text-align: center; color: ${this.point.index}; padding-top: 5px;">${this.y}%</b>
                </div>`;
      } else {
        return `<div style="display: flex; flex-direction: column; padding: 5px;">
                    <span style="text-align: center;  padding-top: 5px">${
                      this.key
                    }</span>
                    <b style="text-align: center; color: ${this.point
                      .index``}; padding-top: 5px;">${this.y}</b>
                </div>`;
      }
    },

    borderRadius: 15,
    borderWidth: 0,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "{point.name}: {y} %",
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Registrations",
      colorByPoint: true,
      innerSize: "75%",
      data: [
        {
          name: "Detractors",
          y: 68.1,
        },
        {
          name: "Passives",
          y: 11.0,
        },
        {
          name: "Promoters",
          y: 11.2,
        },
      ],
    },
  ],
};

export default function Donut() {
  return (
    <div>
      <Card
        content={<HighchartsReact highcharts={Highcharts} options={options} />}
      />

      <div id="container"></div>
      <HomeButton href="/" buttonTitle="Home" />
    </div>
  );
}
