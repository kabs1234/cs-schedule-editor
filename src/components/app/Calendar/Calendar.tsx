import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { schedulesMock } from '../../../stub/stub';

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      events={schedulesMock}
      height={500}
      slotMinTime={'06:00:00'}
      slotMaxTime={'23:00:00'}
      visibleRange={{
        start: '',
      }}
      eventTimeFormat={{
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }}
    />
  );
}
