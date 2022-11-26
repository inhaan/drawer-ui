interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const Header = ({ children }: Props) => {
  return <header>{children}</header>;
};

export default Header;
