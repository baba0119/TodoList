import { useContext, VFC } from 'react';
import styled from "styled-components";
import { TodoContext } from '../container/TodoContext';
import { TodoControlButton } from './TodoUI';

// 各Todoの背景色や左の縦線
const TodoList = styled.div`
  background: #fffaf4;
  border-left: solid 5px #ffaf58;
  height: 4.4rem;
  margin-bottom: 1rem;
`;

// ${(props) => (props.hoge ? "pink" : "red")}
// テキストのデザイン
type Props = {
  isdo: boolean;
}
const TodoText = styled.p<Props>`
  color: ${(props) => props.isdo ? "#8e8e8e" : "#2d2d2d"};
  margin-top: 2px;
  margin-left: 12px;
  margin-right: 12px;
`;

const TodoContent: VFC = () => {
  // コンテキストの使用
  const { TodoData, action } = useContext(TodoContext);

  return (
    <>
      {TodoData.map((todo) => (
        <TodoList key={todo.id}>
          <div style={{display: 'flex'}}>
            <TodoControlButton
              color={'#FC623F'}
              onClick={() => action.toggle(todo.id)}>
              {todo.do}
            </TodoControlButton>
            <TodoControlButton
              color={'#FC623F'}
              onClick={() => action.deleted(todo.id)}>
              Delete
            </TodoControlButton>
          </div>
          <TodoText
            isdo={todo.do === 'undo'}>
              {todo.todo}
            </TodoText>
        </TodoList>
      ))}
    </>
  );
}

export default TodoContent;