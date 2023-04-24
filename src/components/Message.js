import React, { useRef } from "react";

const Message = () => {
  const ref = useRef();
  return (
    <div ref={ref} className={`message`}>
      <div className="messageInfo">
        <img alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>message</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Message;
