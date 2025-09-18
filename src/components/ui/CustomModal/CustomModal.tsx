import { Button, Modal, Box } from '@mui/material';
import { type PropsWithChildren, type ReactElement } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '280px',
  textAlign: 'center',
  boxShadow: 24,
  bgcolor: 'background.paper',
  '& .MuiBackdrop-root': { backgroundColor: 'transparent' },
};

const closeModalButtonStyles = {
  position: 'absolute',
  display: 'flex',
  top: 0,
  minWidth: '30px',
  p: '10px',
  right: 0,
};

type ModalProps = {
  isModalOpen: boolean;
  onModalClose: () => void;
};

export default function CustomModal({
  children,
  isModalOpen,
  onModalClose,
}: PropsWithChildren<ModalProps>): ReactElement {
  return (
    <Modal open={isModalOpen} onClose={onModalClose}>
      <Box sx={modalStyles}>
        <Button sx={closeModalButtonStyles} onClick={onModalClose}>
          <CloseIcon />
          <span className="visually-hidden">Закрыть модальное окно</span>
        </Button>

        {children}
      </Box>
    </Modal>
  );
}
