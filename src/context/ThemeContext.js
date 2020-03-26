import React, { createContext, Component } from "react";

const themeConfig = {
  light: {
    bodyBg: "bgLight",
    btnBgColor: "formBtnLight"
  },
  dark: {
    bodyBg: "bgDark",
    btnBgColor: "formBtnDark"
  }
};

const { Provider, Consumer } = createContext({
  type: "light",
  config: themeConfig.light,
  onToggleTheme: () => null
});

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  toggleTheme = () => {
    const { type, config } = this.state;
    const { dark, light } = themeConfig;
    this.setState({
      type: type === "dark" ? "light" : "dark",
      config: config === dark ? light : dark
    });
  };

  state = {
    type: "light",
    config: themeConfig.light,
    onToggleTheme: this.toggleTheme
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
