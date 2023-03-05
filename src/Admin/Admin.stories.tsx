import {Admin} from "./Admin";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import '../dayjsConfig';
import ruRU from "antd/es/locale/ru_RU";
import React from "react";
import {ConfigProvider as AntdConfigProvider} from 'antd';

const Story: ComponentMeta<typeof Admin> = {
  component: Admin,
  title: 'Admin',
};

export default Story;

const Template: ComponentStory<typeof Admin> = (args) =>
  <AntdConfigProvider locale={ruRU}><Admin {...args} /></AntdConfigProvider>;

export const Primary = Template.bind({});
Primary.args = {

};
