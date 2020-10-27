import React, { useState, useContext } from "react";
import { AppContext } from "./ContextProvider";
import { makeStyles, withStyles } from "@material-ui/core/styles/";
import { green, red } from "@material-ui/core/colors";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ColorPicker from "material-ui-color-picker";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  }
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600]
    }
  }
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "0 auto"
  },
  accordion: {
    backgroundColor: "#A19D9D",
    border: "1px solid black"
  },
  accordionSummary: {
    backgroundColor: "#A19D9D",
    borderBottom: "1px solid black"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  flex: {
    display: "flex",
    flexFlow: "row nowrap",
    "& > *": {
      display: "flex",
      flexFlow: "row nowrap"
    }
  }
}));

const Acordion = () => {
  const {
    torta,
    setTorta,
    vela,
    setVela,
    plato,
    setPlato,
    nevado,
    setNevado
  } = useContext(AppContext);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getTorta = (event) => {
    const { value: show } = event.target;
    const newTorta = {
      colorTorta: torta.colorTorta,
      colorRelleno: torta.colorRelleno,
      show
    };
    setTorta(newTorta);
  };
  const getNevado = (event) => {
    const { value: show } = event.target;
    const newNevado = {
      color: nevado.color,
      show
    };
    setNevado(newNevado);
  };
  const getVela = (event) => {
    const { value: show } = event.target;
    const newVela = {
      color: vela.color,
      show
    };
    setVela(newVela);
  };
  const getPlato = (event) => {
    const { value: show } = event.target;
    const newPlato = {
      color: plato.color,
      show
    };
    setPlato(newPlato);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        style={{ backgroundColor: torta.colorTorta }}
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          style={{ backgroundColor: torta.colorTorta }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Torta</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={classes.flex} component="fieldset">
            <FormLabel component="legend">Show</FormLabel>
            <RadioGroup
              aria-label="show"
              name="show"
              value={torta.show}
              onChange={getTorta}
            >
              <FormControlLabel
                value="on"
                control={<GreenRadio />}
                label="On"
              />
              <FormControlLabel
                value="off"
                control={<RedRadio />}
                label="Off"
              />
            </RadioGroup>
            <FormLabel component="legend">Color Torta</FormLabel>
            <ColorPicker
              name="color de Torta"
              defaultValue={torta.colorTorta}
              value={torta.colorTorta}
              onChange={(colorTorta) => setTorta({ ...torta, colorTorta })}
            />
            <FormLabel component="legend">Color Relleno</FormLabel>
            <ColorPicker
              name="color de Relleno"
              defaultValue={torta.colorRelleno}
              value={torta.colorRelleno}
              onChange={(colorRelleno) => setTorta({ ...torta, colorRelleno })}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        style={{ backgroundColor: nevado.color }}
        expanded={expanded === "panel2"}
        onChange={handleChangePanel("panel2")}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          style={{ backgroundColor: nevado.color }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Nevado</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={classes.flex} component="fieldset">
            <FormLabel component="legend">Show</FormLabel>
            <RadioGroup
              aria-label="show"
              name="show"
              value={nevado.show}
              onChange={getNevado}
            >
              <FormControlLabel
                value="on"
                control={<GreenRadio />}
                label="On"
              />
              <FormControlLabel
                value="off"
                control={<RedRadio />}
                label="Off"
              />
            </RadioGroup>
            <FormLabel component="legend">Color</FormLabel>
            <ColorPicker
              name="color de Nevado"
              defaultValue={nevado.color}
              value={nevado.color}
              onChange={(color) => setNevado({ ...nevado, color })}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        style={{ backgroundColor: vela.color }}
        expanded={expanded === "panel3"}
        onChange={handleChangePanel("panel3")}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          style={{ backgroundColor: vela.color }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Vela</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={classes.flex} component="fieldset">
            <FormLabel component="legend">Show</FormLabel>
            <RadioGroup
              aria-label="show"
              name="show"
              value={vela.show}
              onChange={getVela}
            >
              <FormControlLabel
                value="on"
                control={<GreenRadio />}
                label="On"
              />
              <FormControlLabel
                value="off"
                control={<RedRadio />}
                label="Off"
              />
            </RadioGroup>
            <FormLabel component="legend">Color</FormLabel>
            <ColorPicker
              name="color de Vela"
              defaultValue={vela.color}
              value={vela.color}
              onChange={(color) => setVela({ ...vela, color })}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        style={{ backgroundColor: plato.color }}
        expanded={expanded === "panel4"}
        onChange={handleChangePanel("panel4")}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          style={{ backgroundColor: plato.color }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Plato</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={classes.flex} component="fieldset">
            <FormLabel component="legend">Show</FormLabel>
            <RadioGroup
              aria-label="show"
              name="show"
              value={plato.show}
              onChange={getPlato}
            >
              <FormControlLabel
                value="on"
                control={<GreenRadio />}
                label="On"
              />
              <FormControlLabel
                value="off"
                control={<RedRadio />}
                label="Off"
              />
            </RadioGroup>
            <FormLabel component="legend">Color</FormLabel>
            <ColorPicker
              name="color de Plato"
              defaultValue={plato.color}
              value={plato.color}
              onChange={(color) => setPlato({ ...plato, color })}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Acordion;
