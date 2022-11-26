import BtnDrawerCloser from "../buttons/BtnDrawerCloser";
import NavigationItem from "../navigation/NavigationItem";

interface Props {
  onClick?: () => void;
}

const DrawerCloserNavigationItem = ({ onClick }: Props) => {
  return (
    <NavigationItem>
      <div className="drawer-closer-container" onClick={onClick}>
        <BtnDrawerCloser></BtnDrawerCloser>
      </div>
    </NavigationItem>
  );
};

export default DrawerCloserNavigationItem;
