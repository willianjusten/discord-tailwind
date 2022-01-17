import { Story, Meta } from '@storybook/react'
import MessageWithUser, { MessageWithUserProps } from '.'

export default {
  title: 'MessageWithUser',
  component: MessageWithUser
} as Meta

export const Default: Story<MessageWithUserProps> = (args) => <MessageWithUser {...args} />

Default.args = {
  message: {
    text: 'Lorem Lorem',
    avatarUrl: '/avatars/0.jpg',
    user: 'John Doe',
    date: '09/24/2021'
  }
}
