import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import sunburst from "highcharts/modules/sunburst.js";
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";

if (typeof Highcharts === "object") {
  sunburst(Highcharts);
}

export default function Test() {
  const [colorData, setColorData] = useState([]);
  const [winsAndLosses, setWinsAndLosses] = useState([]);

  const fetchData = async () => {
    const requestOne = axios.get(
      "https://api.sportsdata.io/v3/mlb/scores/json/teams",
      {
        params: { key: process.env.MLB_KEY },
      }
    );
    const requestTwo = axios.get(
      "https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022",
      {
        params: { key: process.env.MLB_KEY },
      }
    );

    await axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          setColorData(responseOne);
          setWinsAndLosses(responseTwo);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const finalObject = (necessaryData) => {
    const newWinsAndLosses = winsAndLosses.map((stats) => {
      return {
        city: stats.City,
        parent: `${stats.League} ${stats.Division}`,
        divisionRank: stats.DivisionRank,
        league: stats.League,
        leagueRank: stats.LeagueRank,
        losses: stats.Losses,
        name: stats.Name,
        teamID: stats.TeamID,
        value: stats.Wins,
      };
    });
    const sortedColorData = colorData.sort((a, b) => a.teamID - b.teamID);
    const sortedNewWinsAndLosses = newWinsAndLosses.sort(
      (a, b) => a.teamID - b.teamID
    );
    const final = sortedNewWinsAndLosses.map((team, index) => {
      return {
        ...team,
        color: `#${sortedColorData[index].PrimaryColor}`,
        secondaryColor: `#${sortedColorData[index].SecondaryColor}`,
      };
    });
    return [...necessaryData, ...final];
  };
  const incomingData = [
    {
      id: "MLB",
      parent: "",
      name: "MLB",
      color: "transparent",
    },
    {
      id: "AL",
      parent: "MLB",
      name: "American League",
      color: "#D50032",
    },
    {
      id: "NL",
      parent: "MLB",
      name: "National League",
      color: "#002D72",
    },
    /* American League */
    {
      id: "AL East",
      parent: "AL",
      name: "AL East",
    },
    {
      id: "AL West",
      parent: "AL",
      name: "AL West",
    },
    {
      id: "AL Central",
      parent: "AL",
      name: "AL Central",
    },
    /* National League */

    {
      id: "NL East",
      parent: "NL",
      name: "NL East",
    },

    {
      id: "NL West",
      parent: "NL",
      name: "NL West",
    },
    {
      id: "NL Central",
      parent: "NL",
      name: "NL Central",
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
        data: colorData && winsAndLosses ? finalObject(incomingData) : null,
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
  return (
    <div>
      <Card
        content={<HighchartsReact highcharts={Highcharts} options={options} />}
      />
      <HomeButton href="/" buttonTitle="Home" />
    </div>
  );
}
