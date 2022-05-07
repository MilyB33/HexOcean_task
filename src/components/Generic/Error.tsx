interface IProps {
  error: string;
}

const Error = ({ error }: IProps) => {
  return (
    <span className="text-defaults-error">
      <small>{error}</small>
    </span>
  );
};

export default Error;
