import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const getObjectWithErrorMessage = (
  message: string
): { error: string } => {
  return {
    error: message,
  };
};

export const getFormatDateTime = (date: string): string => {
  return dayjs(date).format('DD.MM.YYYY HH:mm');
};

export const getHumanizedHours = (milliseconds: number): string => {
  const duration = dayjs.duration(milliseconds);
  const hours = duration.hours();

  const formatDate = duration.format('HH:mm');
  const word = hours > 1 ? 'hours' : 'hour';

  return `${formatDate} ${word}`;
};

export const getHumanizedDays = (milliseconds: number): string => {
  const duration = dayjs.duration(milliseconds);
  const days = duration.days();

  const formatDate = duration.format('D');
  const word = days > 1 ? 'days' : 'day';

  return `${formatDate} ${word} ${getHumanizedHours(milliseconds)}`;
};

export const getDateDuration = (startDate: string, endDate: string): string => {
  const dayjsStartDate = dayjs(startDate);
  const dayjsEndDate = dayjs(endDate);

  const duration = dayjs.duration(dayjsEndDate.diff(dayjsStartDate));
  const durationMilliseconds = duration.asMilliseconds();

  if (duration.asHours() >= 24) {
    return getHumanizedDays(durationMilliseconds);
  }

  return getHumanizedHours(durationMilliseconds);
};
