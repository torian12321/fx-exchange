const props = {
  radius: '4px',
  width: '1px',
  style: 'solid',
  color: 'red',
};

const border = {
  ...props,
  style: `${props.style} ${props.width} ${props.color}`,
}

export default border;
