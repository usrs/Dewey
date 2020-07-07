import { cardTitle, title } from "../material-kit-react";
import imagesStyle from "../imagesStyles";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "white"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    color: "white"
  },
  smallTitle: {
    color: "white"
  },
  description: {
    color: "white"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "white"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
