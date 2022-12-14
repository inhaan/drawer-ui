import "./App.css";
import BtnDrawerOpener from "./components/buttons/BtnDrawerOpener";
import Drawer from "./components/drawer/Drawer";
import DrawerCloserNavigationItem from "./components/drawer/DrawerCloserNavigationItem";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Navigation from "./components/navigation/Navigation";
import Paragraph from "./components/basic/Paragraph";
import Spacer from "./components/basic/Spacer";
import Title from "./components/Title";
import Toolbar from "./components/layout/Toolbar";
import { useState } from "react";

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onClickDrawerOpener = () => {
    setIsOpenDrawer(true);
  };

  const onClickDrawerCloser = () => {
    setIsOpenDrawer(false);
  };

  return (
    <div className="App">
      <Drawer isOpen={isOpenDrawer}>
        <Navigation>
          <DrawerCloserNavigationItem
            onClick={onClickDrawerCloser}
          ></DrawerCloserNavigationItem>
        </Navigation>
      </Drawer>
      <div>
        <Header>
          <Toolbar>
            {!isOpenDrawer && (
              <BtnDrawerOpener onClick={onClickDrawerOpener}></BtnDrawerOpener>
            )}
            <Title>Drawer</Title>
          </Toolbar>
        </Header>
        <Main>
          <Spacer height={55}></Spacer>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium laboriosam iusto aliquid quia rerum, facere expedita
            quaerat atque dolores inventore iste architecto et quam velit eaque
            ea modi accusamus ullam? Adipisci, aliquid velit architecto neque
            enim dignissimos? Laudantium incidunt ut eius provident quasi vel
            illum architecto, in iusto odit ratione, rem aspernatur modi, quia
            temporibus dolores dolorem est! Dignissimos, vel! Ducimus assumenda
            et voluptas animi aut dolorum culpa minima quos vitae! Quod ullam
            voluptatibus id laudantium quaerat rerum exercitationem, molestiae
            tempora saepe. Amet nihil vero, eligendi reiciendis autem atque
            fugiat! Dolores eos accusantium nesciunt porro delectus, quaerat
            omnis ipsam! Vero doloribus deleniti cum praesentium sint voluptate
            adipisci nostrum. A minus incidunt nam molestias adipisci
            dignissimos, fugit non fugiat aperiam facere? Voluptatum laudantium,
            numquam odio similique ea autem excepturi molestiae qui possimus
            quaerat porro libero quas nulla ab distinctio. Ullam deserunt
            maiores nostrum pariatur hic laboriosam a illum totam dolorem!
            Officia!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            voluptas hic. Consectetur harum quia deserunt ex animi molestias
            deleniti adipisci labore repellat et impedit quidem fuga, laudantium
            velit? Aperiam, debitis. Delectus voluptas at laboriosam saepe
            dolores cupiditate atque, repellendus libero quidem exercitationem
            hic quam distinctio quae ad nisi veritatis blanditiis iste enim
            facilis incidunt dolorem corporis aut perferendis? Ullam, sit.
            Tenetur ex esse voluptas placeat, fugiat maxime. Ratione magni harum
            architecto delectus deserunt tempora, fugiat accusantium beatae,
            necessitatibus dolores a perferendis quo sit rerum cum autem! Ut
            neque consequuntur necessitatibus? Neque harum nostrum ipsum quaerat
            laborum, assumenda distinctio quae, illo ut necessitatibus esse
            tempore, a est doloremque et quo dolorem corrupti? Nam obcaecati
            accusamus iusto modi, cum mollitia quasi ea. Aliquam quia molestiae
            omnis praesentium possimus voluptatibus tempora numquam? Praesentium
            ad est hic rerum, laboriosam omnis adipisci officiis, dolore
            deserunt nesciunt atque! Aspernatur, voluptatibus necessitatibus!
            Iure dicta illo similique corporis!
          </Paragraph>
        </Main>
      </div>
    </div>
  );
}

export default App;
