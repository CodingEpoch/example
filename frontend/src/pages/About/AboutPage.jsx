import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CompanyInfo from "../../components/Features/CompanyInfo/CompanyInfo";
import TeamMembers from "../../components/Team/TileCards/MemberTiles";
import FAQAccordion from "../../components/Accordions/FAQ/FAQAccordion";
import BasicContact from "../../components/Contact/BasicContact/ContactSection";
import CareersOpportunities from "../../components/Jobs/CareerOpportunities/CareerOpportunities";
import BetterContact from "../../components/Contact/BetterContact/BetterContact";

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

function AboutPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.container}>
        <div className="">
          <CompanyInfo className={classes.mission}/>
        </div>
        <div className="">
          <TeamMembers members={members} />
        </div>

        <Divider variant="fullWidth" className={classes.divider} />
        
        <div className="card-container-about bg-secondary">
          <BetterContact />
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className="card-container-about">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
