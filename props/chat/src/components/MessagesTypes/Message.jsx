import React from "react";

import PropTypes from "prop-types";

export default function Message(props) {
  const  message = props.msg;
  
  return (
    <>
      <li className="clearfix" data-id={message.id}>
        <div className="message-data align-right">
          <span className="message-data-time">{message.time}</span> &nbsp;
          &nbsp;
          <span className="message-data-name">{message.from.name}</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">{message.text}</div>
      </li>
    </>
  );
}

Message.propTypes = {
  props: PropTypes.object,
};
