import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const GoBackButton = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-center mx-auto p-1 text-text border-2 border-purple hover:bg-purple transition-colors duration-200 text-xl"
    >
      <AiOutlineArrowLeft />
      Go back
    </Link>
  );
};

export default GoBackButton;
