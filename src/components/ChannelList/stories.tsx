import { Story, Meta } from '@storybook/react'
import ChannelList, { ChannelListProps } from '.'

import { data } from 'data'

export default {
  title: 'ChannelList',
  component: ChannelList
} as Meta

export const Default: Story<ChannelListProps> = (args) => <ChannelList {...args} />

Default.args = {
  server: data[0]
}