import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';

import Header from '../components/Header';
import { tokens } from '../theme';
function Calendar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [crrEvents, setCrrEvents] = useState([]);

    const handleDateClick = (selected) => {
        console.log(selected);
        const title = prompt('Please enter new title');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dataStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you want to delete ${selected.event.title}`)) {
            selected.event.remove();
        }
    };
    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* Calendar SideBar */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p={2} borderRadius="6px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {crrEvents.map((item) => (
                            <ListItem
                                key={item.id}
                                sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '4px' }}
                            >
                                <ListItemText
                                    primary={item.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(item.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </Typography>
                                    }
                                ></ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar */}
                <Box flex="1 1 100%" ml={2}>
                    <FullCalendar
                        height="75vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        selectable={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCrrEvents(events)}
                        initialEvents={[]}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Calendar;
