import * as Yup from 'yup';
import {
  ErrorValidation,
  ErrorValidationIcon,
  // WarningValidation,
  // WarningValidationIcon,
  CorrectValidation,
  CorrectIconValidationIcon,
} from './RegisterForm.styled';

const nameRules =
  /^[a-zA-Z0-9а-яА-Я]+((['-](?=[a-zA-Z0-9а-яА-Я])|(?=[a-zA-Z0-9а-яА-Я]))?[a-zA-Z0-9а-яА-Я]*)*$/;
const emailRules =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRules = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{6,255}$/;

const errorMassege = msg => {
  return (
    <div className="error">
      <ErrorValidation>{msg}</ErrorValidation>
      <ErrorValidationIcon />
    </div>
  );
};

// const warningMassege = msg => {
//   return (
//     <div className="warning">
//       <WarningValidation>{msg}</WarningValidation>
//       <WarningValidationIcon />
//     </div>
//   );
// };

export const ValidMassege = ({ children }) => {
  return (
    <div className="valid">
      <CorrectValidation>{children}</CorrectValidation>
      <CorrectIconValidationIcon />
    </div>
  );
};

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, errorMassege('Name is too short'))
    .max(16, errorMassege('Name is too long'))
    .matches(nameRules, {
      message: errorMassege('Invalid name'),
      excludeEmptyString: true,
    })
    .required(errorMassege('This field is required')),
  email: Yup.string()
    .email(errorMassege('Invalid email format'))
    .matches(emailRules, {
      message: errorMassege('Invalid email format'),
      excludeEmptyString: true,
    })
    .required(errorMassege('This field is required')),

  password: Yup.string()
    .min(6, errorMassege('Password too short'))
    .max(16, errorMassege('Password is too long'))
    .matches(passwordRules, {
      message: errorMassege('Password is not valid'),
      excludeEmptyString: true,
    })
    .required(errorMassege('This field is required')),
});
