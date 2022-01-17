import { Story, Meta } from '@storybook/react'
import ServerHeader, { ServerHeaderProps } from '.'

export default {
  title: 'ServerHeader',
  component: ServerHeader
} as Meta

export const Default: Story<ServerHeaderProps> = (args) => <ServerHeader {...args} />

Default.args = {
  name: 'NextJS'
}