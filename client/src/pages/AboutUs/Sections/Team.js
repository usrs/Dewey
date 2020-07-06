import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/landingPageSections/teamStyle.js";

import Nathan from "assets/teamMembers/Nathan.jpg";
import Erika from "assets/teamMembers/Erika.jpg";
import Michael from "assets/teamMembers/Michael.jpg";
//import Tree's

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Nathan} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nathan
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Discription for Nathan
                </p>
              </CardBody>
              {/*
              Maybe button for Github and Linkdn?

              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
              */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Erika} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Erika Paige
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                I am a Wardrobe Stylist and an image consultant with 10+ years of industry experience.
                I offer creative solutions with critical analysis to bring brand awareness through strong visuals and styling.
                I bring a self-motivated work ethic and a positive attitude to team projects. I am always ready for the next new challenge!

                Working as a freelance creative, I often have a vision that I am eager to execute.
                When creating a look or collaborating with production to build a story;
                I have the knowledge and tools it takes to turn the vision into a reality.
                I am looking to expand that knowledge into technology, in particular website development.
                </p>
              </CardBody>
              {/*
              Maybe button for Github and Linkdn?

              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
              */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Michael} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Michael
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Front end web developer, fascinated by innovation and inspired by challenge.
                  Studied full stack web development at a 12 week coding bootcamp at UCI's
                  school of continuing education, where I became versed in HTML, CSS,
                  JavaScript, NodeJS, Express, MySQL, Sequelize, NoSQL, MongoDB, Mongoose,
                  and ReactJS.
                </p>
              </CardBody>
              {/*
              Maybe button for Github and Linkdn?

              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
              */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={Tree} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jonathan
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              {/*
              Maybe button for Github and Linkdn?

              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
              */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
