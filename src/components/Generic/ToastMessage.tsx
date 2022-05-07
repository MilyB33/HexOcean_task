import { useToastMessage } from '../hooks/useToastMessage';

const ToastMessage = () => {
  const { state } = useToastMessage();

  if (!state.isShown) {
    return null;
  }

  return (
    <div
      className={`absolute top-5 right-5 text-defaults-white p-2 rounded ${
        state.type === 'error'
          ? 'bg-defaults-error'
          : 'bg-defaults-success'
      }`}
    >
      {state.message}
    </div>
  );
};

export default ToastMessage;
