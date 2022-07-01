import React from 'react';

/**
  * Отображает список элементов
  *
  * @param {string} className - название класса для списка
  * @param {Array} items - список дочерних элементов
  * @param {function} children - функция для вывода дочерних элементов
  */

export default function List({className, items, children}) {
  return (
    <ul className={className}>
      {children(items)}
    </ul>
  )
}
