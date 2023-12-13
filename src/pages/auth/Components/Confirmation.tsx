import { Modal, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  close: () => void;
  opened: boolean;
};

const Confirmation = ({ close, opened }: ModalProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal centered opened={opened} onClose={close} title="Authentication">
        <div className="mt-32 text-center font-bold">All Set!</div>
        <Group justify="center">
          <Button
            size="lg"
            my={16}
            className="bg-circle-blue-two w-1/2"
            onClick={() => navigate("/")}
          >
            Continue
          </Button>
        </Group>
      </Modal>
    </div>
  );
};

export default Confirmation;
