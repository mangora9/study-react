import React, { useState, useRef } from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current);
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;

    // 유효성 검사
    // 빈 값 검사
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: '오류가 발생했습니다!',
        message: '이름과 나이를 입력해주세요 :)'
      })
      return;
    }

    // 나이 0보다 작은지 검사
    if (Number(userAge) < 1) {
      setError({
        title: '오류가 발생했습니다!',
        message: '나이는 1보다 커야합니다 :)'
      })
      return;
    }

    const user = {userName, userAge}
    props.onAddUserInfo(user);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const modalCloseHandler = () => {
    setError(null);
  }
  return (
    <Wrapper>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>이름</label>
          <input
            type='text'
            id='userName'
            ref={nameInputRef}
          />
          <label htmlFor='userAge'>나이</label>
          <input
            type='number'
            id='userAge'
            ref={ageInputRef}
          />
          <Button type='submit'>추가</Button>
        </form>
      </Card>
      {error && <ErrorModal title={error.title} message={error.message} onClick={modalCloseHandler} /> }
    </Wrapper>
  );
};

export default AddUser;