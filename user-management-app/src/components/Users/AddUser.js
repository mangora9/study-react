import React, { useState } from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();
  const [userName, setUserName] = useState('');
  const changeUserNameHandler = (e) => {
    setUserName(e.target.value);
  }

  const [userAge, setUserAge] = useState('');
  const changeUserAgeHandler = (e) => {
    setUserAge(e.target.value);
  }

  const addUserHandler = (e) => {
    e.preventDefault();

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

    setUserName('');
    setUserAge('');
  }

  const modalCloseHandler = () => {
    setError(null);
  }
  return (
    <Wrapper>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>이름</label>
          <input type='text' id='userName' value={userName} onChange={changeUserNameHandler}/>
          <label htmlFor='userAge'>나이</label>
          <input type='number' id='userAge' value={userAge} onChange={changeUserAgeHandler}/>
          <Button type='submit'>추가</Button>
        </form>
      </Card>
      {error && <ErrorModal title={error.title} message={error.message} onClick={modalCloseHandler} /> }
    </Wrapper>
  );
};

export default AddUser;