import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";

drilldown(Highcharts);

const options = {
  chart: {
    type: "column",
  },
  title: {
    align: "left",
    text: "Browser market shares. January, 2022",
  },
  subtitle: {
    align: "left",
    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Total percent market share",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%",
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },

  series: [
    {
      name: "Browsers",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 63.06,
          drilldown: "Chrome",
        },
        {
          name: "Safari",
          y: 19.84,
          drilldown: "Safari",
        },
        {
          name: "Firefox",
          y: 4.18,
          drilldown: "Firefox",
        },
        {
          name: "Edge",
          y: 4.12,
          drilldown: "Edge",
        },
        {
          name: "Opera",
          y: 2.33,
          drilldown: "Opera",
        },
        {
          name: "Internet Explorer",
          y: 0.45,
          drilldown: "Internet Explorer",
        },
        {
          name: "Other",
          y: 1.582,
          drilldown: null,
        },
      ],
    },
  ],
  drilldown: {
    breadcrumbs: {
      position: {
        align: "right",
      },
    },
    series: [
      {
        name: "Chrome",
        id: "Chrome",
        data: [
          ["v65.0", 0.1],
          ["v64.0", 1.3],
          ["v63.0", 53.02],
          ["v62.0", 1.4],
          ["v61.0", 0.88],
          ["v60.0", 0.56],
          ["v59.0", 0.45],
          ["v58.0", 0.49],
          ["v57.0", 0.32],
          ["v56.0", 0.29],
          ["v55.0", 0.79],
          ["v54.0", 0.18],
          ["v51.0", 0.13],
          ["v49.0", 2.16],
          ["v48.0", 0.13],
          ["v47.0", 0.11],
          ["v43.0", 0.17],
          ["v29.0", 0.26],
        ],
      },
      {
        name: "Firefox",
        id: "Firefox",
        data: [
          ["v58.0", 1.02],
          ["v57.0", 7.36],
          ["v56.0", 0.35],
          ["v55.0", 0.11],
          ["v54.0", 0.1],
          ["v52.0", 0.95],
          ["v51.0", 0.15],
          ["v50.0", 0.1],
          ["v48.0", 0.31],
          ["v47.0", 0.12],
        ],
      },
      {
        name: "Internet Explorer",
        id: "Internet Explorer",
        data: [
          ["v11.0", 6.2],
          ["v10.0", 0.29],
          ["v9.0", 0.27],
          ["v8.0", 0.47],
        ],
      },
      {
        name: "Safari",
        id: "Safari",
        data: [
          ["v11.0", 3.39],
          ["v10.1", 0.96],
          ["v10.0", 0.36],
          ["v9.1", 0.54],
          ["v9.0", 0.13],
          ["v5.1", 0.2],
        ],
      },
      {
        name: "Edge",
        id: "Edge",
        data: [
          ["v16", 2.6],
          ["v15", 0.92],
          ["v14", 0.4],
          ["v13", 0.1],
        ],
      },
      {
        name: "Opera",
        id: "Opera",
        data: [
          ["v50.0", 0.96],
          ["v49.0", 0.82],
          ["v12.1", 0.14],
        ],
      },
    ],
  },
};

// const options = {
//   chart: {
//     type: "areaspline",
//     height: 210,
//     backgroundColor: "transparent",
//   },
//   title: {
//     text: "",
//     align: "left",
//     style: {
//       color: "#000000",
//       fontWeight: "bold",
//     },
//   },
//   legend: {
//     align: "right",
//     verticalAlign: "top",
//     floating: true,
//     squareSymbol: false,
//     symbolRadius: 0,
//     symbolWidth: 0,
//     symbolHeight: 0,
//     itemStyle: {
//       fontWeight: "light",
//     },
//     useHTML: true,
//     labelFormatter: function () {
//       return (
//         '<div><div class="inline-block mb-0.5 mr-1.5" style="width:23px;height:3px;background-color:' +
//         this.color +
//         '"></div>' +
//         this.name +
//         "</div>"
//       );
//     },
//   },
//   xAxis: {
//     type: "datetime",
//     categories: [
//       Date.UTC(2021, 9, 1),
//       Date.UTC(2021, 9, 2),
//       Date.UTC(2021, 9, 3),
//       Date.UTC(2021, 9, 4),
//       Date.UTC(2021, 9, 5),
//       Date.UTC(2021, 9, 6),
//       Date.UTC(2021, 9, 7),
//     ],
//     labels: {
//       align: "center",
//       formatter() {
//         return Highcharts.dateFormat("%m/%e", this.value);
//       },
//     },
//   },
//   yAxis: {
//     title: {
//       text: null,
//     },
//     labels: {
//       formatter: function () {
//         return "$" + this.axis.defaultLabelFormatter.call(this);
//       },
//     },
//   },
//   tooltip: {
//     shared: true,
//     useHTML: true,
//     borderColor: "#D3D4D9",
//     borderRadius: 15,
//     formatter: function (tooltip) {
//       const header = Highcharts.dateFormat("%B %e", this.x) + `<br/>`;
//       return header + tooltip.bodyFormatter(this.points).join("");
//     },
//     pointFormat: '<b class="ml-2.5" style="color:white">${point.y}</b><br/>',
//     backgroundColor: "white",
//     style: {
//       fontSize: "12px",
//       fontWeight: 700,
//     },
//   },
//   credits: {
//     enabled: false,
//   },
//   plotOptions: {
//     series: {
//       pointPlacement: "on",
//     },
//     areaspline: {
//       fillOpacity: 0.1,
//     },
//   },
//   series: [
//     {
//       name: "Prior Period",
//       data: [100, 220, 400, 80, 380, 150, 110],
//       color: "#FCD15B",
//       lineColor: "#FCD15B",
//       marker: {
//         symbol: "circle",
//         fillColor: "#FFFFFF",
//         lineWidth: 2,
//         lineColor: "#FCD15B",
//       },
//     },
//     {
//       name: "Current Period",
//       data: [100, 270, 600, 100, 590, 150, 580],
//       color: "#FF792A",
//       lineColor: "#FF792A",
//       marker: {
//         symbol: "circle",
//         fillColor: "#FFFFFF",
//         lineWidth: 2,
//         lineColor: "#FF792A",
//       },
//     },
//   ],
//   exporting: {
//     enabled: false,
//   },
// };
export default function PageOne() {
  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
