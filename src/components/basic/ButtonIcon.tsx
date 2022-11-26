interface Props {
  children?: JSX.Element[] | JSX.Element | string;
  onClick?: () => void;
}

const ButtonIcon = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-icon" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
