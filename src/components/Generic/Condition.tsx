import { Field } from 'react-final-form';

interface IProps {
  when: string;
  is: string;
  children: React.ReactNode;
}

// Condition component based on documentation
const Condition = ({ when, is, children }: IProps) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export default Condition;
