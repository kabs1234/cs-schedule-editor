import type { ReactElement } from 'react';
import { schedulesMock } from '../../../stub/stub';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import { Box } from '@mui/material';

export default function ScheduleList(): ReactElement {
  return (
    <Box
      sx={{
        mt: '20px',
        '& .MuiCard-root:not(:last-child)': {
          mb: '20px',
        },
      }}
    >
      {schedulesMock.map((schedule) => {
        return <ScheduleItem key={schedule.title} {...schedule} />;
      })}
    </Box>
  );
}
