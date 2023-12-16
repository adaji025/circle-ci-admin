import { Modal, Button, Group } from "@mantine/core";
import useNotification from "../../hooks/useNotification";

type ModalProps = {
  close: () => void;
  opened: boolean;
};

const ConfirmationLogout = ({ close, opened }: ModalProps) => {
  const { logoutUser } = useNotification();

  return (
    <div>
      <Modal centered opened={opened} onClose={close} title="Authentication">
        <div className="mt-32 text-center font-bold">All Set!</div>
        <Group justify="center">
          <Button
            size="lg"
            variant="outline"
            my={16}
            // className="w-1/2"
            onClick={close}
          >
            Cancel
          </Button>
          <Button
            size="lg"
            my={16}
            className="bg-circle-blue-two"
            onClick={logoutUser}
          >
            Continue
          </Button>
        </Group>
      </Modal>
    </div>
  );
};

export default ConfirmationLogout;
