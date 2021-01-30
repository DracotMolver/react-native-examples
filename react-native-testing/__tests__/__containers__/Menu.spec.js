import React from "react";
import { render, cleanup, fireEvent, act } from "@testing-library/react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// mocks
import MockedNavigator from "./mockNavigation";
import MockProvider from "./mockProvider";
// container
import MenuContainer from "./containers/Menu";

// Testing Drawer Screen
describe("[component_name]", () => {
  afterEach(() => {
    fetch.mockClear();
    cleanup();
  });

  const Drawer = createDrawerNavigator();

  const DrawerComponent = () => (
    <Drawer.Navigator
      drawerContent={(props) => (
        <MenuContainer
          {...props}
          headerItems={{
            iniciales: "JD",
            usuario: "JohnDoe",
          }}
          footerItems={{}}
          menuItems={[
            {
              id: "1",
              iconName: "home",
              descripcion: "idx-1",
              url: "home",
              submenu: [],
            },
            {
              id: "2",
              iconName: "wallet",
              descripcion: "idx-2",
              submenu: [
                {
                  id: "2-2-1",
                  iconName: "ivic",
                  descripcion: "idx-2-2-1",
                  submenu: [
                    {
                      id: "2-3-1",
                      iconName: "payment",
                      descripcion: "idx-2-3-1",
                    },
                  ],
                },
                {
                  id: "2-2-2",
                  iconName: "ivic",
                  descripcion: "idx-2-2-2",
                  submenu: [],
                },
              ],
            },
            {
              id: "3",
              iconName: "user",
              descripcion: "idx-3",
              submenu: [
                {
                  id: "3-2-1",
                  iconName: "ivic",
                  descripcion: "idx-3-2-1",
                  activar: true,
                  submenu: [],
                },
                {
                  id: "3-2-2",
                  iconName: "ivic",
                  descripcion: "idx-3-2-2",
                  submenu: [],
                },
              ],
            },
          ]}
        />
      )}
    >
      <Drawer.Screen name="home" component={() => null} />
    </Drawer.Navigator>
  );

  const Component = () => (
    <MockProvider>
      <MockedNavigator component={DrawerComponent} />
    </MockProvider>
  );

  it("Assertion", async () => {
    const { getByText, getByA11yRole, update } = render(<Component />);

    await act(async () => {
      update(<Component />);
    });

    const menu1 = getByText("idx-3");
    fireEvent(menu1, "onPress");

    const subMenu3 = getByText("idx-3-2-1");
    fireEvent(subMenu3, "onPress");

    // this will open the modal
    const switchBtn = getByA11yRole("switch");

    await act(async () => {
      fireEvent(switchBtn, "onValueChange");
    });

    // cancel the modal
    const cancelButton = getByText("Cancelar");
    await act(async () => {
      fireEvent(cancelButton, "onPress");
    });

    expect(menu1).toBeTruthy();
    expect(subMenu3).toBeTruthy();
    expect(switchBtn).toBeTruthy();
    expect(cancelButton).toBeTruthy();

    // This is useful to finish the test when the drawer is closed.
    // setTimeout(() => {
    //   done();
    // }, 2000);
  });
});
