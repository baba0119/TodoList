import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FC, useReducer } from 'react';
import { TodoListModel, actionModel, TodoContext } from './TodoContext';
import { getUniqueStr} from './uuid';

// 仮データの定義
const Data: TodoListModel[] = [
  {
    id: getUniqueStr(),
    todo: '今日も一日頑張るぞい',
    do: 'undo'
  },
  {
    id: getUniqueStr(),
    todo: '今日も一日頑張るぞい',
    do: 'undo'
  },
  {
    id: getUniqueStr(),
    todo: '今日も一日頑張るぞい',
    do: 'undo'
  },
  {
    id: getUniqueStr(),
    todo: '今日も一日頑張るぞい',
    do: 'undo'
  },
  {
    id: getUniqueStr(),
    todo: '今日も一日頑張るぞい',
    do: 'undo'
  }
];

const TodoSlice = createSlice({
  name: 'todo',
  initialState: Data,
  reducers: {
    done: (state, action: PayloadAction<string>) => {
      const content: TodoListModel = {
        id: getUniqueStr(),
        todo: action.payload,
        do: 'undo'
      };
      return state.concat(content);
    },
    toggle: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(data => data.id === action.payload)
      let todoState = state;
      if (todoState[index].do === 'redo') {
        todoState[index].do = 'undo';
      } else {
        todoState[index].do = 'redo';
      }
      return todoState;
    },
    deleted: (state, action: PayloadAction<string>) => (
      state.filter(data => data.id !== action.payload)
    )
  }
});

// プロバイダーの作成
const TodoProvider: FC = ({ children }) => {
  // reducerの作成
  const [todoState, dispatch] = useReducer(
    TodoSlice.reducer, Data
  );

  // actionの作成
  // deleteが何かとブッキングした
  const { done, toggle, deleted } = TodoSlice.actions;

  // actionを格納する定数の定義(空)
  const action: actionModel = {
    done: (content: string) => dispatch(done(content)),
    toggle: (id: string) => dispatch(toggle(id)),
    deleted: (id: string) => dispatch(deleted(id))
  };

  return (
    <TodoContext.Provider value={{ TodoData: todoState, action }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

// toggle関数別案
// return state.map(data => {
//   if (data.id === action.payload) {
//     if( data.do === 'redo'){
//       return {
//         id: data.id,
//         todo: data.todo,
//         do: 'undo'
//       }
//     } else {
//       return {
//         id: data.id,
//         todo: data.todo,
//         do: 'redo'
//       }
//     }
//   }
//   return data;
// })