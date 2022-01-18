import { Story, Meta } from '@storybook/react'
import ChannelTopbar, { ChannelTopbarProps } from '.'

export default {
  title: 'ChannelTopbar',
  component: ChannelTopbar
} as Meta

export const Default: Story<ChannelTopbarProps> = (args) => <ChannelTopbar {...args} />

Default.args = {
  channel: {
    label: 'welcome',
    description: 'Introduction to the Tailwind CSS framework and community.'
  }
}