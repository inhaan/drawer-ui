interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const NavigationItem = ({ children }: Props) => {
  return <div className="nav-item">{children}</div>;
};

export default NavigationItem;
