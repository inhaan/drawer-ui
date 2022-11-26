import ButtonIcon from "../basic/ButtonIcon";

interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const BtnDrawerCloser = ({ children }: Props) => {
  return (
    <ButtonIcon>
      <svg className="icon drawer-closer" viewBox="0 0 24 24">
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    </ButtonIcon>
  );
};

export default BtnDrawerCloser;
