import { useContext, useState, VFC } from 'react';
import styled from "styled-components";
import { TodoContext } from '../container/TodoContext';
import { TodoControlButton } from './TodoUI';

// 入力フォームの作成
const TodoInputBox = styled.input`
  margin-top: 6px;
  margin-left: 12px;
  width: 84%;
  padding: 4px 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  :focus{
    border: 2px solid #ff9900;
    z-index: 10;
    outline: 0;
  }
`;

const TodoInputForm: VFC = () => {
  // コンテキストの使用
  const { action } = useContext(TodoContext);
  // 入力フォームの状態
  const [text, setText] = useState<string>("");

  return (
    <>
      {/*
        Todoの登録
        ボタンとテキストボックスのセット
      */}
      <div
        style={{
          display: 'flex',
          marginBottom: '22px'
        }}
      >
        <TodoControlButton
          color={'#FFC338'}
          onClick={() => action.done(text)}>
          done
        </TodoControlButton>
        <TodoInputBox
          type="text" value={text}
          onChange={(event) => setText(event.currentTarget.value)}
        />
      </div>
    </>
  );
}

export default TodoInputForm;