/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import './App.css';
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru'

moment.locale('ru');

function Wrapper(Component) {
  return (props) => {
    const timePretty = moment(new Date(props.date)).fromNow();
    return <Component date={timePretty} />
  }
}

const DateTimePretty = Wrapper(DateTime)

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
      {/* <DateTime date={props.date} /> */}
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-03-17 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-03-17 22:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}