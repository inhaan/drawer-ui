interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const Title = ({ children }: Props) => {
  return <div className="title">{children}</div>;
};

export default Title;
