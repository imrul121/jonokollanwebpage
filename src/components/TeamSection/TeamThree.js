import teamSection from "@/data/teamSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTeamThree from "./SingleTeamThree";

const { title, teams,teamsa } = teamSection;

const TeamThree = ({ className = "", showTitle = true, items = 15 }) => {
  return (
    <section id="ourteam" className={`team-three ${className}`}>
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              Leaderboard
              <span className="dot">.</span>
            </h2>
          </div>
        )}
        <Row style={{justifyContent:"center"}}>
          {teams.slice(0, items).map((team) => (
            <SingleTeamThree key={team.id} team={team} />
          ))}
        </Row>
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              {title}
              <span className="dot">.</span>
            </h2>
          </div>
        )}
      
        <Row style={{justifyContent:"center"}}>
          {teamsa.slice(0, items).map((team) => (
            <SingleTeamThree key={team.id} team={team} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamThree;
