import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTeamThree = ({ team = {} }) => {
  const { image, name, designation, socials } = team;

  return (
    <Col md={6} lg={3}>
      <div className="team-card-three">
        <div className="team-card-three__inner">
          <div className="team-card-three__image">
            <Image
              src={require(`@/images/resource/${image}`).default.src}
              alt=""
            />
          </div>
          <div className="team-card-three__content">
            <h5 className="team-card-three__name">{name}</h5>
            <div className="team-card-three__designation">{designation}</div>
          </div>
          <div className="team-card-three__hover">
            <h5 className="team-card-three__name">{name}</h5>
            <div className="team-card-three__designation">{designation}</div>
           
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeamThree;
