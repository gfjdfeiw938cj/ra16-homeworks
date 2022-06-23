import React from "react";

import PropTypes from "prop-types";

export default function Response(props) {
  const  message = props.msg;
 
  return (
    <>
      <li>
        <div className="message-data" data-id={message.id}>
          <span className="message-data-name">
            <i className="fa fa-circle online"></i> {message.from.name}
          </span>
          <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">{message.text}</div>
      </li>
    </>
  );
}

Response.propTypes = {
  props: PropTypes.object,
};
