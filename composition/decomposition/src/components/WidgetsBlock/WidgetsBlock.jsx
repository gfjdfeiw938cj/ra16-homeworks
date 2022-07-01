import React from 'react';
import Widget from './Widget/Widget';

/**
  * Отображает панель поиска
  *
  * @param {Array<Object>} titles - список заголовков
  * @param {Object} dayLink - объект ссылки для примера
  */

export default function WidgetsBlock({items}) {
  const renderWidgetContent = item => {
    // отображение внутренности виджета в зависимости от типа и содержащихся данных
  };

  return (
    <div className="widgets-block">
      {items.map(item => {
        return (
          <Widget title={item.title} item={item}>
            {renderWidgetContent}
          </Widget>
        );
      })}
    </div>
  )
}
