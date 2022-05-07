import { Link } from 'react-router-dom';

const GoBackButton = () => {
  return (
    <Link
      to="/"
      className=" text-center mx-auto p-1 text-defaults-white border-2 border-purple hover:bg-purple transition-colors duration-200 text-xl"
    >
      Go back
    </Link>
  );
};

export default GoBackButton;
