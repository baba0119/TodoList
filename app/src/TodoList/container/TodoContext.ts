import { createContext } from 'react';

// Todoリストのデータ型
export type TodoListModel = {
  id: string;
  todo: string;
  do: 'redo' | 'undo';
};

// actionを格納する構造体の型
export type actionModel = {
  done: (content: string) => void;
  toggle: (id: string) => void;
  deleted: (id: string) => void;
}

// Contextの型
type TodoContextModel = {
  TodoData: TodoListModel[];
  action: actionModel;
}

// Contextの作成
export const TodoContext = createContext<TodoContextModel>({} as TodoContextModel);