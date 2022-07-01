import React from 'react';

/**
  * Отображает кнопку "еще"
  *
  * @param {string} mode - вариант отображения кнопки (какая иконка)
  * @param {string} block - признак блока в котором находится кнопка
  * @param {function} onSelectMore - обработчик клика по кнопке
  */

export default function MoreBtn({mode, block, onSelectMore}) {
  return (
    <span className={`${mode} more-icon`} onClick={() => onSelectMore(block)}></span>
  )
}
