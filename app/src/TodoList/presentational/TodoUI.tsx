import { VFC } from 'react';
import styled from "styled-components";
import TodoInputForm from './TodoInputForm';
import TodoContent from './TodoContent';

// 見出しデザイン
const TodoTheme = styled.h1 `
  margin-top: 16px;
  font-size:3em;
	text-align:center;
	line-height:0.95em;
	font-weight:bold;
	text-shadow:
		0 0.03em 0.03em #FFAB91,
		0 0.03em 0.03em #000,
		0 0.03em 0.03em #FBE9E7;
`;

// Todoリストの横幅や真ん中にそろえる
// この要素の中にTodoを仕込む
const TodoListBox = styled.div`
  max-width: 50vw;
  min-width: 300px;
  margin: 0 auto;
`;

// ボタンのデザイン
type ColorProps = {
  color: string;
};
export const TodoControlButton = styled.button<ColorProps>`
  margin: 10px 0 4px 12px;
  display: block;
	padding: 0.2;
	text-align: center;
	text-decoration: none;
	color: #fff;
	background: ${(props) => props.color};
  :hover{
    opacity:0.8;
	  cursor: pointer;
	  text-decoration: none;
  }
`;

// Todoアプリのpresentational component
// マークアップやUIに関わる処理 アクションの埋め込み
// 余分にContextを読み込まない
const TodoUI: VFC = () => {
  return(
    <div>
      <TodoTheme>Todoリスト</TodoTheme>
      {/*
        Todoの登録、Todo一覧の表示
        各アクションの埋め込み
      */}
      <TodoListBox>
        <TodoInputForm/>  {/* Todoの入力フォーム */}
        <TodoContent/>      {/* Todo一覧の閲覧 */}
      </TodoListBox>
    </div>
  )
}

export default TodoUI;