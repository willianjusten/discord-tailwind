import { Story, Meta } from '@storybook/react'
import Message, { MessageProps } from '.'

export default {
  title: 'Message',
  component: Message
} as Meta

export const Default: Story<MessageProps> = (args) => <Message {...args} />

Default.args = {
  message: {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quo in modi corporis vero culpa voluptatem molestias, magni ratione debitis sunt, eligendi perferendis, aperiam nam quia hic necessitatibus aliquam quidem.'
  }
}
