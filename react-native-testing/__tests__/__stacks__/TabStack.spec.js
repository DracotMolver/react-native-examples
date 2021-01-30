import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import MockProvider from "./__mocks__/mockProvider";
// stack
import { ROUTES } from "./constants";
import TabStack from "./TabStack";

describe("TAB STACK", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    footerItems: [],
  };

  const tabStackSetup = (props = defaultProps) =>
    render(
      <MockProvider>
        <NavigationContainer>
          <TabStack {...props} />
        </NavigationContainer>
      </MockProvider>
    );

  it("Should render correctly the tab bottom navigation with props", () => {
    const props = {
      footerItems: {
        elementos: [
          {
            id: 1,
            url: ROUTES.HOME,
            titulo: "Inicio",
            componente: "HomeStack",
            icon: ROUTES.HOME,
          },
          {
            id: 2,
            url: ROUTES.PAGOS,
            titulo: "Pago",
            componente: "PagosStack",
            icono: ROUTES.PAGOS,
          },
          {
            id: 3,
            url: ROUTES.TRANSFERENCIAS,
            titulo: "Transferencias",
            componente: "TransaccionesStack",
            icono: ROUTES.TRANSFERENCIAS,
          },
          {
            id: 4,
            url: ROUTES.IVIC,
            titulo: "IVIC",
            componente: "IvicStack",
            icono: ROUTES.IVIC,
          },
        ],
      },
    };

    const { toJSON } = tabStackSetup(props);

    expect(toJSON()).toMatchSnapshot();
  });
});
