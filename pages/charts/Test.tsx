import React from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Test() {
  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${process.env.MLB_TEAM_API_KEY}`
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    console.log(process.env.MLB_TEAM_API_KEY);
  }, []);
  return <div>Test</div>;
}
