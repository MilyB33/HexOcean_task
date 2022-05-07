import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Condition from '../Generic/Condition';
import {
  validator,
  composeValidators,
} from '../../utils/fieldsValidators';
import Client from '../../client';
import SelectInput from '../Inputs/SelectInput';
import { parseToFloat, parseToInt } from '../../utils/parsers';
import RangeInput from '../Inputs/RangeInput';
import CustomInput from '../Inputs/CustomInput';
import { useToastMessage } from '../hooks/useToastMessage';

const DishForm = () => {
  const { handleSuccess, handleError } = useToastMessage();

  return (
    <Form
      onSubmit={async (values) => {
        const data = await Client.addDish(values);

        if (data.failed) handleError(data.message);
        else {
          handleSuccess(data.message);
          console.log(data.data);
        }
      }}
      destroyOnUnregister={true}
    >
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="grid gap-4 w-full rounded p-4 sm:p-10 sm:w-[500px] bg-surface shadow-lg"
        >
          <h2 className="text-center text-3xl sm:text-5xl text-purple">
            <span className="text-orange">Hi!</span> Add new dish
          </h2>

          <Field
            name="name"
            label="Name"
            placeholder="Name"
            component={CustomInput}
            type="text"
            autoComplete="off"
            validate={validator.required}
          />

          <Field
            name="preparation_time"
            label="Preparation time"
            component={CustomInput}
            type="time"
            step="1"
            defaultValue="00:00:00"
            validate={composeValidators(
              validator.required,
              validator.pattern(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)
            )}
          />

          <Field
            name="type"
            component={SelectInput}
            label="Type"
            validate={validator.required}
          >
            <option value="">Choose Type</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>

          <Condition when="type" is="pizza">
            <Field
              name="no_of_slices"
              label="Number of slices"
              placeholder="Number of slices"
              component={CustomInput}
              type="number"
              parse={parseToInt}
              validate={composeValidators(
                validator.required,
                validator.isNumber,
                validator.min(0)
              )}
            />

            <Field
              name="diameter"
              label="Diameter"
              placeholder="Diameter"
              component={CustomInput}
              type="number"
              step="0.01"
              parse={parseToFloat}
              validate={composeValidators(
                validator.required,
                validator.isNumber,
                validator.min(0)
              )}
            />
          </Condition>

          <Condition when="type" is="soup">
            <Field
              name="spiciness_scale"
              label="Spiciness scale"
              component={RangeInput}
              min="1"
              max="10"
              step="1"
              defaultValue={1}
              parse={parseToInt}
              validate={composeValidators(
                validator.required,
                validator.isNumber,
                validator.min(0)
              )}
            />
          </Condition>

          <Condition when="type" is="sandwich">
            <Field
              name="slices_of_bread"
              label="Slices of bread"
              placeholder="Slices of bread"
              component={CustomInput}
              type="number"
              parse={parseToInt}
              validate={composeValidators(
                validator.required,
                validator.isNumber,
                validator.min(0)
              )}
            />
          </Condition>

          <button
            disabled={
              props.submitting || props.pristine || props.invalid
            }
            className={`${
              !props.submitting && !props.pristine && !props.invalid
                ? 'hover:opacity-100'
                : ''
            } p-1 text-defaults-white bg-purple-100 opacity-75  transition-opacity duration-200`}
            type="submit"
          >
            {props.submitting ? 'loading' : 'Submit'}
          </button>
        </form>
      )}
    </Form>
  );
};

export default DishForm;
