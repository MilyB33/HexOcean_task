import { FieldRenderProps } from 'react-final-form';
import Label from '../Generic/Label';

type Props = FieldRenderProps<string, any>;

const RangeInput = ({ input, meta, ...rest }: Props) => {
  const { label, ...otherProps } = rest;

  return (
    <Label name={input.name} label={label}>
      <input
        id={input.name}
        type="range"
        className="input-default text-text"
        {...input}
        {...otherProps}
      />
      <p>Actual spiciness scale: {input.value}</p>
    </Label>
  );
};

export default RangeInput;
