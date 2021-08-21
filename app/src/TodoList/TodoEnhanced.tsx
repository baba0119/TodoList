import { VFC } from 'react';
import TodoUI from './presentational/TodoUI';
import TodoProvider from './container/TodoLogic';

// ロジックのコンポーネントとUIのコンポーネントをここで結合
// Context API でグローバルな状態を管理
const EnhancedTodo: VFC = () => {
  return (
    <TodoProvider>
      <TodoUI/>
    </TodoProvider>
  )
}

export default EnhancedTodo;