import React, {useEffect, useState, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    }
  }
  if (action.type === 'EMAIL_INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    }
  }
  return {
    value: '',
    isValid: false,
  };
}

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return {
      value: action.val,
      isValid: action.val.length > 6,
    }
  }
  if (action.type === 'PASSWORD_INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.length > 6,
    }
  }
  return {
    value: '',
    isValid: false,
  };
}
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('validate!!')
      setFormIsValid(emailIsValid && passwordState);
    }, 500);

    return () => {
      console.log('clean up!!');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'EMAIL_INPUT',
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'PASSWORD_INPUT',
      val: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'EMAIL_INPUT_BLUR'
    })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'PASSWORD_INPUT_BLUR'
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            autoComplete='on'
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
