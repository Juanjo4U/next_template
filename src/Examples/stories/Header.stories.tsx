import React from 'react'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

const configurations: ComponentMeta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
}

export default configurations

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
