import React, { useEffect, useState } from "react";

const Job = (props) => {
  const {
    id,
    organization,
    logo,
    is_new,
    featured,
    position,
    location,
    assignment_country,
    education,
    sdg,
    contract,
    website,
    category,
    background,
    requirements,
    languages,
  } = props.data;

  let keywords = [category, contract, location, ...background, ...sdg];

  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      console.log(d.default); // Log the imported SVG
      setIcon(d.default);
    });
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div
      className={
        featured ? "job-container job-container--borderLeft" : "job-container"
      }
    >
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="part1">
        <div className="company">
          <span className="cname">{organization}</span>
          {props.data.new && <span className="new">new!</span>}
          {props.data.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{position}
          <a href={website}>
            <span class="link"></span>
          </a>
        </div>

        <div className="details">
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{assignment_country}</span>
        </div>

        <div className="requirements">
          <span>{requirements}</span>
        </div>

        <div className="education_level">
          <span>{education}</span>
        </div>
        
      </div>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Job;
