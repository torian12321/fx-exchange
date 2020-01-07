const props = {
  radius: '8px',
  width: '1px',
  style: 'solid',
  color: '#ccc',
};

const border = {
  ...props,
  border: `${props.style} ${props.width} ${props.color}`,
}

export default border;
