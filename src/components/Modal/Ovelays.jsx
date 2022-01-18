import Modal from 'react-modal';
import Form from '../Form/Form';
Modal.setAppElement('#root');

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '232px',
    padding: '20px 20px 8px',
    borderRadius: '22px',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
    backgroundColor: '#fff',
  },
};

const Ovelays = ({
  setModalIsOpen,
  modalIsOpen,
  setName,
  name,
  isEditing,
  handleSubmit,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={ModalStyles}
    >
      <Form
        name={name}
        setName={setName}
        handleSubmit={handleSubmit}
        setModalIsOpen={setModalIsOpen}
        isEditing={isEditing}
      />
    </Modal>
  );
};

export default Ovelays;
