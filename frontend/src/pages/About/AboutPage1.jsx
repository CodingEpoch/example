import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BetterContact from "../../components/Features/Contact/BetterContact/BetterContact";
import TeamMembers from "../../components/Features/Team/TileCards/MemberTiles";
import CompanyInfo2 from "../../components/Features/Business/CompanyInfo/CompanyInfo2";
import CareersOpportunities from "../../components/Features/CareerOpportunities/CareerOpportunities";
import FAQAccordion from "../../components/Features/Accordions/FAQ/FAQAccordion";

const members = [
  {
    name: "Ryan Painter",
    position: "Team Lead",
    bio: "Jane is a highly skilled team lead with over 10 years of experience in the industry.",
    image: "/images/members/member1.webp",
  },
  {
    name: "Edward Hart",
    position: "Developer",
    bio: "John is a talented developer with a passion for solving complex problems.",
    image: "/images/members/member3.webp",
  },
];

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    color: "white",
    backgroundColor: "white",
  },
  mission: {
    width: '80%',
  },
  container: {
    backgroundColor: 'white !important'
  }
}));

function AboutPage1() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.container}>
        <div className="">
          <CompanyInfo2 className={classes.mission}/>
        </div>
        <div className="">
          <TeamMembers members={members} />
        </div>        
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="card-container-about">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}

export default AboutPage1;
