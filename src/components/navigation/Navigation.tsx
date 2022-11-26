import BtnDrawerCloser from "../buttons/BtnDrawerCloser";
import Divider from "../basic/Divider";
import DrawerCloserNavigationItem from "../drawer/DrawerCloserNavigationItem";
import NavigationItem from "./NavigationItem";
import Button from "../basic/Button";
import BtnNavigation from "../buttons/BtnNavigation";

interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}

const Navigation = ({ children }: Props) => {
  return (
    <nav>
      {children}
      <Divider></Divider>
      <NavigationItem>
        <BtnNavigation>Inbox</BtnNavigation>
      </NavigationItem>
      <NavigationItem>
        <BtnNavigation>Starred</BtnNavigation>
      </NavigationItem>
      <NavigationItem>
        <BtnNavigation>Send email</BtnNavigation>
      </NavigationItem>
      <NavigationItem>
        <BtnNavigation>Inbox</BtnNavigation>
      </NavigationItem>
      <NavigationItem>
        <BtnNavigation>Drafts</BtnNavigation>
      </NavigationItem>
      <Divider></Divider>
      <NavigationItem>
        <BtnNavigation>All mail</BtnNavigation>
      </NavigationItem>
      <NavigationItem>
        <BtnNavigation>Trash</BtnNavigation>
      </NavigationItem>
      <NavigationItem>
        <BtnNavigation>Spam</BtnNavigation>
      </NavigationItem>
    </nav>
  );
};

export default Navigation;
