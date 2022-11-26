import Button from "../basic/Button";

interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const BtnNavigation = ({ children }: Props) => {
  return (
    <Button
      style={{
        padding: "10px 16px",
        width: "100%",
      }}
    >
      {children}
    </Button>
  );
};

export default BtnNavigation;
