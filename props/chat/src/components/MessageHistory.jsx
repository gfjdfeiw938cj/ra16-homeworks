import React from "react";

import PropTypes from "prop-types";

import Message from "./MessagesTypes/Message";
import Response from "./MessagesTypes/Response";
import Typing from "./MessagesTypes/Typing";

export default function MessageHistory({ list = [] }) {
 
  if (!list.length) {
    return null;
  }
  let message;
  const assistiveMessages = (obj) => {
    if (obj.type === "message") {
      message = <Message key={obj.id} msg={obj} />;
    } else if (obj.type === "response") {
      message = <Response key={obj.id} msg={obj} />;
    } else if (obj.type === "typing") {
      message = <Typing key={obj.id} msg={obj} />;
    }
    return message;
  };

  return (
    <>
      <ul className="list-mesages">
        {list.map((item) => assistiveMessages(item))}
      </ul>
    </>
  );
}

MessageHistory.defaultProps = {
  list: [],
};

MessageHistory.propTypes = {
  list: PropTypes.array.isRequired,
};
