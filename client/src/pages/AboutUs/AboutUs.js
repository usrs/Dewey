import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";


// Sections for this page
import Team from "./Sections/Team.js";
import ContactUS from "./Sections/ContactUS.js";



const AboutUs = () =>
{
    return (
        <>
            <Team/>
            <ContactUS/>
        </>
    )
}

export default AboutUs