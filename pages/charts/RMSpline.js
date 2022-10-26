import React from "react";
import HomeButton from "../../components/HomeButton";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Card from "../../components/Card";

const data_one = [
  38000, 37300, 37892, 38564, 36770, 36026, 34978, 35657, 35620, 35971, 36409,
  36435, 34643, 34956, 33199, 31136, 30835, 31611, 30666, 30319, 31766,
];
const data_two = [
  22534, 23599, 24533, 25195, 25896, 27635, 29173, 32646, 35686, 37709, 39143,
  36829, 35031, 36202, 35140, 33718, 37773, 42556, 43820, 46445, 50048,
];
const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const spline_height = "50%";
const options = {
  chart: {
    type: "areaspline",
    height: spline_height,
    backgroundColor: "transparent",
  },
  title: {
    text: "chart id",
    align: "left",
    style: {
      color: "transparent",
      fontWeight: "bold",
    },
  },
  legend: {
    align: "right",
    verticalAlign: "top",
    floating: true,
    squareSymbol: false,
    symbolRadius: 0,
    symbolWidth: 0,
    symbolHeight: 0,
    y: -15,
    itemStyle: {
      fontWeight: "light",
    },
    useHTML: true,
    labelFormatter: function () {
      return (
        '<div><div class="inline-block mb-0.5 mr-1.5" style="width:23px;height:3px;background-color:' +
        this.color +
        '"></div>' +
        this.name +
        "</div>"
      );
    },
  },
  xAxis: {
    type: "category",
    categories: labels[`{{ $spline->chart_id }}`],
    labels: {
      align: "center",
    },
  },
  yAxis: {
    labels: {
      format: "${text}", // The $ is literally a dollar unit
    },
    title: {
      text: null,
    },
  },
  tooltip: {
    backgroundColor: "white",
    shared: true,
    useHTML: true,
    formatter: function (tooltip) {
      // const header = Highcharts.dateFormat('%B %e', this.x) + `<br/>`
      const newDate = new Date(this.x);
      const month = newDate.toLocaleString("default", { month: "long" });
      const dateString = JSON.stringify(this.x);
      const day = dateString.substring(4, 6);
      const previousPeriod = String(this.points[1].y).replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
      const currentPeriod = String(this.y).replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
      if (
        this.points[0].series.data.length > 7 ||
        this.points[0].series.data.length === 4
      ) {
        return `<div style="display: flex; flex-direction: column; padding: 5px;">
                        <span style="text-align: center; padding-top: 5px">Week of ${month} ${day}</span>
                        <b style="text-align: center;color: white; padding-top: 5px;"><span style="color: ${this.points[0].color}">Current Week: $${currentPeriod}</span></b>
                        <b style="text-align: center;color: white; padding-top: 5px;"><span style="color: ${this.points[1].color}">${this.points[0].series.data.length} Weeks Prior: $${previousPeriod}</span></b>
                    </div>`;
      } else {
        return `<div style="display: flex; flex-direction: column; padding: 5px; background: black;">
                        <span style="text-align: center; padding-top: 5px">Day of ${month} ${day}</span>
                        <b style="text-align: center;color: white; padding-top: 5px;"><span style="color: ${this.points[0].color}">Current Day: $${currentPeriod}</span></b>
                        <b style="text-align: center;color: white;"><span style="color: ${this.points[1].color};">${this.points[0].series.data.length} Days Prior: $${previousPeriod}</span></b>
                    </div>`;
      }
      // return  + (tooltip.bodyFormatter(this.points).join(''));
    },

    borderRadius: 15,
    borderWidth: 0,
    style: {
      fontSize: "14px",
    },
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointPlacement: "on",
    },
    areaspline: {
      fillOpacity: 0.1,
    },
  },
  series: [
    {
      name: "Current Period",
      data: data_one,
      color: "#FF792A",
      lineColor: "#FF792A",
      marker: {
        symbol: "circle",
        fillColor: "#FFFFFF",
        lineWidth: 2,
        lineColor: "#FF792A",
      },
    },
    {
      name: "Previous Period",
      data: data_two,
      color: "#ffca2a",
      lineColor: "#ffca2a",
      marker: {
        symbol: "circle",
        fillColor: "#FFFFFF",
        lineWidth: 2,
        lineColor: "#ffca2a",
      },
    },
  ],
  exporting: {
    enabled: false,
  },
};
export default function RMSpline() {
  return (
    <div>
      <Card
        content={<HighchartsReact highcharts={Highcharts} options={options} />}
      />
      <div className="text-center">
        <h3>
          Note: Filler data from other spline chart but colors and card matches
          rmdevs
        </h3>
      </div>
      <HomeButton href="/" buttonTitle="Home" />
    </div>
  );
}
