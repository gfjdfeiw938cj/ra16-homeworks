import {React, useState} from 'react';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

/**
  * Отображает блок новостей с заголовками и списком
  * хранит состояние c активной вкладкой новостей, чтобы переключать на активный заголовок и
  * перерендеривать список новостей
  *
  * @param {Array<string>} titles - список заголовков новостей
  * @param {Array<Object>} items - список новостей
  */

export default function NewsBlock({titles, items}) {
  const [activeTitle, setActiveTitle] = useState(titles[0]);

  const onSelectTitle = title => {
    setActiveTitle(title);
  }

  const renderTitles = items => {
    return items.map((item, index) => {
      const isActive = item === activeTitle && 'active';
      return (
        <li key={index} className={`title-item ${isActive}`} onClick={() => onSelectTitle(item)}>{item}</li>
      );
    })
  };

  const renderNews = items => {
    return items
    .filter(item => item.titlesList.includes(activeTitle))
    .map (item => {
      const {id, link, icon, descr, text} = item;
      return (
        <ListItem key={id} className="news-item">
          <a href={link}>
            <img src={icon} alt={descr} />
            <div>{text}</div>
          </a>
        </ListItem>
      );
    })
  };

  return (
    <div className="news-block">
      <List className="titles-list" items={titles}>
        {renderTitles}
      </List>
      <List className="news-list" items={items}>
        {renderNews}
      </List>
    </div>
  )
}
