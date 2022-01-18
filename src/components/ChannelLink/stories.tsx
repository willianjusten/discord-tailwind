import { Story, Meta } from '@storybook/react'
import ChannelLink, { ChannelLinkProps } from '.'

export default {
  title: 'ChannelLink',
  component: ChannelLink
} as Meta

export const Default: Story<ChannelLinkProps> = (args) => (
  <ChannelLink {...args} />
)

Default.args = {
  serverId: 1,
  channel: {
    id: 1,
    label: 'welcome',
    icon: 'Book'
  }
}
