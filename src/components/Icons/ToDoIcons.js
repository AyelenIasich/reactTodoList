import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as StarSuccessSVG} from "../../assets/svg/starIcon.svg";

const iconTypes = {
  star: (props) => <StarSuccessSVG {...props} />
};

function ToDoIcons({ type, color, width, height, style }) {
  const IconComponent = iconTypes[type];

  return (
    <span className={`${color}`} style={style}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </span>
  );
}

ToDoIcons.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object
};

ToDoIcons.defaultProps = {
  color: 'default-color',
  width: 200,
  height: 150,
  style: {} 
};

export default ToDoIcons;
