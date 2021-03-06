import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoTemplate.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
        <input placeholder="할 일을 입력" />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
  );
};

export default TodoInsert;
