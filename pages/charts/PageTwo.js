import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import sunburst from "highcharts/modules/sunburst.js";
import HomeButton from "../../components/HomeButton";
import Card from "../../components/Card";
if (typeof Highcharts === "object") {
  sunburst(Highcharts);
}

const data = [
  {
    id: "0.0",
    parent: "",
    name: "MLB",
    color: "transparent",
  },
  {
    id: "1.1",
    parent: "0.0",
    name: "American League",
    color: "#D50032",
  },
  {
    id: "1.2",
    parent: "0.0",
    name: "National League",
    color: "#002D72",
  },
  /* American League */
  {
    id: "2.1",
    parent: "1.1",
    name: "AL East",
  },
  {
    id: "2.2",
    parent: "1.1",
    name: "AL West",
  },
  {
    id: "2.3",
    parent: "1.1",
    name: "AL Central",
  },
  /* National League */

  {
    id: "2.4",
    parent: "1.2",
    name: "NL East",
  },

  {
    id: "2.5",
    parent: "1.2",
    name: "NL West",
  },
  {
    id: "2.6",
    parent: "1.2",
    name: "NL Central",
  },
  /* AL East Teams */

  {
    id: "3.11",
    parent: "2.1",
    name: "Yankees",
    value: 97,
    color: "#003087;",
  },

  {
    id: "3.12",
    parent: "2.1",
    name: "Blue Jays",
    value: 90,
    color: "#134A8E",
  },
  {
    id: "3.13",
    parent: "2.1",
    name: "Rays",
    value: 86,
    color: "#092C5C",
  },
  {
    id: "3.14",
    parent: "2.1",
    name: "Orioles",
    value: 82,
    color: "#DF4601",
  },
  {
    id: "3.15",
    parent: "2.1",
    name: "Red Sox",
    value: 75,
    color: "#BD3039",
  },
  /* AL West Teams */

  {
    id: "3.21",
    parent: "2.2",
    name: "Astros",
    value: 104,
    color: "#002D62",
  },
  {
    id: "3.22",
    parent: "2.2",
    name: "Mariners",
    value: 87,
    color: "#0C2C56",
  },
  {
    id: "3.23",
    parent: "2.2",
    name: "Angels",
    value: 73,
    color: "#003263",
  },
  {
    id: "3.24",
    parent: "2.2",
    name: "Rangers",
    value: 66,
    color: "#003278",
  },
  {
    id: "3.25",
    parent: "2.2",
    name: "Athletics",
    value: 57,
    color: "#003831",
  },
  /* AL West Teams */

  {
    id: "3.31",
    parent: "2.3",
    name: "Guardians",
    value: 90,
    color: "#AB0003",
  },
  {
    id: "3.32",
    parent: "2.3",
    name: "White Sox",
    value: 79,
    color: "#27251F",
  },
  {
    id: "3.33",
    parent: "2.3",
    name: "Twins",
    value: 77,
    color: "#002B5C",
  },
  {
    id: "3.34",
    parent: "2.3",
    name: "Tigers",
    value: 65,
    color: "#0C2340",
  },
  {
    id: "3.35",
    parent: "2.3",
    name: "Royals",
    value: 64,
    color: "#004687",
  },
  /* NL East Teams */
  {
    id: "3.41",
    parent: "2.4",
    name: "Braves",
    value: 100,
    color: "#CE1141",
  },
  {
    id: "3.42",
    parent: "2.4",
    name: "Mets",
    value: 98,
    color: "#002D72",
  },
  {
    id: "3.43",
    parent: "2.4",
    name: "Phillies",
    value: 86,
    color: "#E81828",
  },
  {
    id: "3.44",
    parent: "2.4",
    name: "Marlins",
    value: 67,
    color: "#00A3E0",
  },
  {
    id: "3.45",
    parent: "2.4",
    name: "Nationals",
    value: 55,
    color: "#AB0003",
  },
  /* NL West Teams */
  {
    id: "3.51",
    parent: "2.5",
    name: "Dodgers",
    value: 110,
    color: "#005A9C",
  },
  {
    id: "3.52",
    parent: "2.5",
    name: "Padres",
    value: 87,
    color: "#2F241D",
  },
  {
    id: "3.53",
    parent: "2.5",
    name: "Giants",
    value: 80,
    color: "#FD5A1E",
  },
  {
    id: "3.54",
    parent: "2.5",
    name: "Diamondbacks",
    value: 73,
    color: "#A71930",
  },
  {
    id: "3.55",
    parent: "2.5",
    name: "Rockies",
    value: 66,
    color: "#333366",
  },
  /* NL Centrals Teams */
  {
    id: "3.61",
    parent: "2.6",
    name: "Cardinals",
    value: 92,
    color: "#C41E3A",
  },

  {
    id: "3.62",
    parent: "2.6",
    name: "Brewers",
    value: 84,
    color: "#FFC52F",
  },
  {
    id: "3.63",
    parent: "2.6",
    name: "Cubs",
    value: 73,
    color: "#0E3386",
  },
  {
    id: "3.64",
    parent: "2.6",
    name: "Pirates",
    value: 60,
    color: "#27251F",
  },
  {
    id: "3.65",
    parent: "2.6",
    name: "Reds",
    value: 60,
    color: "#C6011F",
  },
];

const options = {
  chart: {
    height: 600,
  },
  title: {
    text: "MLB Teams Wins 2022",
  },
  credits: {
    enabled: false,
  },

  series: [
    {
      type: "sunburst",
      data: data,
      allowDrillToNode: true,
      cursor: "pointer",
      rotationMode: "circular",
      levels: [
        {
          level: 1,
          tooltip: {
            formatter: function () {
              return (
                "The value for <b>" + this.x + "</b> is <b>" + this.y + "</b>"
              );
            },
          },
          levelIsConstant: false,
          dataLabels: {
            filter: {
              property: "outerArcLength",
              operator: ">",
              value: 64,
            },
          },
        },
        {
          level: 2,
          colorByPoint: true,
        },
        {
          level: 3,
          colorVariation: {
            key: "brightness",
            to: -0.5,
          },
        },
        {
          level: 4,
          colorByPoint: true,
        },
      ],
      tooltip: {
        pointFormatter: function () {
          if (!this.options.value) {
            return `<div style='padding: 10px; background-color: white; border-radius: 9px;'>${this.options.name}</div>`;
          } else {
            return `<div style='padding: 10px; background-color: white; border-radius: 9px;'>
    The  <b style='color: ${this.options.color}'>
        ${this.options.name}
        </b> won <b>
        ${this.options.value}
        </b> games this season
</div>`;
          }
        },
      },
    },
  ],
};

export default function PageTwo() {
  return (
    <div>
      <Card
        content={<HighchartsReact highcharts={Highcharts} options={options} />}
      />
      <HomeButton />
    </div>
  );
}
