import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// Sections for this page
import Team from "./Sections/Team.js";
import ContactUS from "./Sections/ContactUS.js";

/*
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
*/



const AboutUs = () =>
{
    return
    (
        <div>
            <Navbar/>
            <Team/>
            <ContactUS/>
            <Footer/>
        </div>
    );
}

export default AboutUs