import {
  Box,
  Button,
  FormControl,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import type { ReactElement } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import {
  FIELD_REQUIRED_ERROR_MESSAGE,
  MEDIA_QUERY_THEMES,
} from '../../../const';
import { getObjectWithErrorMessage } from '../../../utils/utils';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs, { type Dayjs } from 'dayjs';

export type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  title: z
    .string(FIELD_REQUIRED_ERROR_MESSAGE)
    .min(1, getObjectWithErrorMessage('Title must not be empty')),
  startDate: z.custom<Dayjs>((value) => dayjs.isDayjs(value), 'Invalid date'),
  endDate: z.custom<Dayjs>((value) => dayjs.isDayjs(value), 'Invalid date'),
});

export default function AddScheduleForm(): ReactElement {
  const isResolutionDesktop = useMediaQuery(
    MEDIA_QUERY_THEMES.breakpoints.up('desktop')
  );

  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      startDate: dayjs(),
      endDate: dayjs().add(1, 'hour'),
    },
    mode: 'onSubmit',
  });

  const onValidForm: SubmitHandler<FormType> = (formData): void => {
    console.log(formData);
  };

  return (
    <ThemeProvider theme={MEDIA_QUERY_THEMES}>
      <Box
        sx={{
          width: '300px',
          padding: '10px 20px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: 4,
            backgroundClip: 'text',
            textAlign: 'center',
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          Form for adding schedule
        </Typography>

        <form onSubmit={handleSubmit(onValidForm)}>
          <FormControl
            sx={{
              '& .MuiFormControl-root:not(:last-child)': {
                mb: '10px',
              },
            }}
          >
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Title"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="startDate"
              control={control}
              render={({ field }) => {
                return isResolutionDesktop ? (
                  <DateTimePicker {...field} label="Start date" ampm={false} />
                ) : (
                  <MobileDateTimePicker
                    {...field}
                    label="Start date"
                    ampm={false}
                  />
                );
              }}
            />

            <Controller
              name="endDate"
              control={control}
              render={({ field }) => {
                return isResolutionDesktop ? (
                  <DateTimePicker {...field} label="End date" ampm={false} />
                ) : (
                  <MobileDateTimePicker
                    {...field}
                    label="End date"
                    ampm={false}
                  />
                );
              }}
            />

            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </Box>
    </ThemeProvider>
  );
}
