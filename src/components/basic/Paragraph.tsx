interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const Paragraph = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Paragraph;
