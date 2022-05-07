import { FieldRenderProps } from 'react-final-form';
import Label from '../Generic/Label';
import Error from '../Generic/Error';

type Props = FieldRenderProps<string, any>;

const CustomInput = ({ input, meta, ...rest }: Props) => {
  const { label, ...otherProps } = rest;
  const isError = meta.touched && meta.error;

  return (
    <Label name={input.name} label={label}>
      <input
        id={input.name}
        className={`input-default  ${
          isError ? 'border-defaults-error' : ''
        }`}
        {...input}
        {...otherProps}
      />

      {isError ? <Error error={meta.error} /> : null}
    </Label>
  );
};

export default CustomInput;
