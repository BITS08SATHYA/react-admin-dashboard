import { Box, Typography, useTheme } from "@mui/material";
import Headers from "../../components/Headers";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box m="20px">
        <Headers  title="FAQ" subTitle="Frequently Asked Questions Page"/>

        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    y of type and scrambled it to make a type specimen book.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your intriguing question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    y of type and scrambled it to make a type specimen book.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Most Asked question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    y of type and scrambled it to make a type specimen book.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Favorite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    y of type and scrambled it to make a type specimen book.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    y of type and scrambled it to make a type specimen book.
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
    );
}


export default FAQ;