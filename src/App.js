import React from "react";
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      <User name={"NoName"}/>
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name} </div>
}

User.prototype = {
  name: PropTypes.string
}

export default App;
