import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">비용이 발생하지 않았습니다.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => {
        const { id, title, amount, date } = item;
        return (
          <ExpenseItem title={title} amount={amount} date={date} key={id} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
