interface Props {
  children?: any;
}

const Toolbar = ({ children }: Props) => {
  return <div className="toolbar">{children}</div>;
};

export default Toolbar;
