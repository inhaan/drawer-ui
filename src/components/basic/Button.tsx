interface Props {
  children?: JSX.Element[] | JSX.Element | string;
  style?: React.CSSProperties;
}

const Button = ({ children, style }: Props) => {
  return (
    <button className="btn" style={style}>
      {children}
    </button>
  );
};

export default Button;
