import ButtonIcon from "../basic/ButtonIcon";

interface Props {
  onClick?: () => void;
}

const BtnDrawerOpener = ({ onClick }: Props) => {
  return (
    <ButtonIcon onClick={onClick}>
      <svg className="icon drawer-opener" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    </ButtonIcon>
  );
};

export default BtnDrawerOpener;
