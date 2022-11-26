interface Props {
  children?: JSX.Element[] | JSX.Element | string;
  isOpen?: boolean;
}

const Drawer = ({ children, isOpen }: Props) => {
  return (
    <div
      className="drawer-container"
      style={{
        transform: isOpen ? "none" : "translateX(-240px)",
        width: isOpen ? "240px" : "0px",
      }}
    >
      <div className="drawer">{children}</div>
    </div>
  );
};

export default Drawer;
