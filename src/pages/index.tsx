import { type ReactElement, useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../components/ui/CustomModal/CustomModal';
import AddScheduleForm from '../components/app/AddScheduleForm/AddScheduleForm';
import Calendar from '../components/app/Calendar/Calendar';

export default function IndexPage(): ReactElement {
  const [isScheduleModalOpen, setIsScheduleModalOpen] =
    useState<boolean>(false);

  const onScheduleModalOpenButtonClick = (): void => {
    setIsScheduleModalOpen(true);
  };

  const onScheduleModalClose = (): void => {
    setIsScheduleModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={onScheduleModalOpenButtonClick}
        sx={{
          mt: '20px',
        }}
      >
        Add schedule
      </Button>

      <CustomModal
        isModalOpen={isScheduleModalOpen}
        onModalClose={onScheduleModalClose}
      >
        <AddScheduleForm />
      </CustomModal>

      <Calendar />
    </>
  );
}
