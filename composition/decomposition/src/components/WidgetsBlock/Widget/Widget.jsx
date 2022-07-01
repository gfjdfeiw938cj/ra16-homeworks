import React from 'react';

/**
  * Отображает виджет
  *
  * @param {string} title - заголовок виджета
  * @param {function} children - функция для вывода дочерних элементов
  */

export default function Widget({title, item, children}) {
  return (
    <div className="widget">
      <div>{title}</div>
      {children(item)}
    </div>
  )
}
