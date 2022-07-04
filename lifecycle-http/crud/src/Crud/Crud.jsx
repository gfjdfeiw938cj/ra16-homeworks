/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Head from './Head';
import InputText from './InputText';
import ShowCards from './ShowCards';

function Crud(props) {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState()

  function send(text) {
    if (text === '') return
    setData(text);
  }

  function sendData() {
    if (data === '' || data === undefined) return
    fetch(props.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": 0,
        "content": data
      })
    }).then(loadData)
  }

  function loadData() {
    fetch(props.url)
      .then(res => res.json())
      .then(data => {
        setCards([...data]);
      })
  }

  function delData(id) {
    fetch(`${props.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(loadData);
  }

  function handlerDelete({ target }) {
    delData(target.dataset.id);
  }

  function handlerUpdate(params) {
    loadData();
  }

  const init = loadData;

  useEffect(() => {
    init();
  }, [init])

  useEffect(() => {
    sendData();
  }, [data])

  return (
    <>
      <Head handlerUpdate={handlerUpdate}/>
      <ShowCards cards={cards} onDelete={handlerDelete} />
      <InputText sendMessage={send} />
    </>
  )
}

export default Crud