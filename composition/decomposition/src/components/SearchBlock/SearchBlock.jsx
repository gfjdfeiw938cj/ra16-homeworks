import React from 'react';
import logo from '../../logo.svg';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

/**
  * Отображает панель поиска
  *
  * @param {Array<Object>} titles - список заголовков
  * @param {Object} dayLink - объект ссылки для примера
  */

export default function SearchBlock({titles, dayLink}) {
  const renderTitles = items => {
    return items.map((item, index) => {
      return (
        <ListItem key={index} className="title-item">
          <a href={item.link}>{item.title}</a>
        </ListItem>
      );
    })
  };

  return (
    <div className="search-block">
      <img src={logo} alt="Логотип Яндекс"/>
      <div className="wrap">
        <List className="titles-list" items={titles}>
          {renderTitles}
        </List>
        <form method="GET" action="/search/" className="search">
          <input type="text" name="search" placeholder="Поиск..."/>
        </form>
        <div className="day-link">
          Найдется всё, например
          <a href={dayLink.link}>{dayLink.title}</a>
        </div>
      </div>
    </div>
  )
}
