import React from 'react'

// Функция whatClassName оперделяет (возрашает) имя класса, к которому относится это день недели.  
function whatClassName(item, date, col) {
  let clList = '';
  if (item.prop === 'other') {
    clList += 'ui-datepicker-other-month'; // other это прошлый месяц   
  }
  if (col === 5 || col === 6) {
    clList = 'ui-datepicker-week-end'; // выходные дни 
  }
  if (item.day === date) {
    clList = 'ui-datepicker-today'; // сегодняшний день 
  }
  return clList;
}

function Tbody({ table, today }) {
  return (
    <tbody>
      {
        table.map((e, row) => {
          return <tr key={row}>
            {e.map((n, col) => {
              return <td key={n.id} className={whatClassName(n, today, col)}>   {n.day}    </td>
            })}
          </tr>
        })
      }
    </tbody>
  )
}

export default Tbody;
