import React from 'react';

/**
  * Отображает элемент списка
  *
  * @param {string} className -  название класса для элемента
  * @param {Array} children - список дочерних элементов
  */

export default function ListItem({className, children}) {
  return (
    <li className={className}>{children}</li>
  )
}
