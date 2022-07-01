import React from 'react';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import MoreBtn from '../MoreBtn/MoreBtn';

/**
  * Отображает блок с курсами
  *
  * @param {Array<Object>} items - список курсов
  * @param {function} onSelectMore - обработчик клика для кнопки "еще"
  */

export default function RatesBlock({items, onSelectMore}) {
  const renderRates = items => {
    return items.map(item => {
      const {id, link, title, cur, diff} = item;

      return (
        <ListItem key={id} className="rate-item">
          <a href={link}>{title}</a>
          <div>{cur}</div>
          <div>{diff}</div>
        </ListItem>
      );
    });
  };

  return (
    <div className="rates-block">
      <List className="rates-list" items={items}>
        {renderRates}
      </List>
      <MoreBtn mode="horizont" block="rates" onSelectMore={onSelectMore}/>
    </div>
  )
}
