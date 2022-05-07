interface IProps {
  label: string;
  name: string;
  children: React.ReactNode;
}
const Label = ({ name, label, children }: IProps) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-lg text-text-secondary">
        {label}
      </label>
      <div className="grid">{children}</div>
    </div>
  );
};

export default Label;
