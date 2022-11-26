interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const Main = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Main;
