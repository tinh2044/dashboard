import { Box, useTheme } from '@mui/material';
import Header from '../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../theme';
import { v4 } from 'uuid';
import { useState } from 'react';

const listFaq = [
    {
        id: v4(),
        question: 'An Important Question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        id: v4(),
        question: 'Another Important Question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        id: v4(),
        question: 'Your Favorite Question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        id: v4(),
        question: 'Some Random Question',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        id: v4(),
        question: 'The Final Question',
        answer: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
];

function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [expanded, setExpanded] = useState('');
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            {listFaq.map((faq) => (
                <Accordion expanded={expanded === faq.id} key={faq.id} defaultExpanded>
                    <AccordionSummary
                        onClick={() => setExpanded((prev) => (prev !== faq.id ? faq.id : ''))}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}

export default FAQ;
