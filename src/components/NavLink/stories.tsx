import { Story, Meta } from '@storybook/react'
import NavLink, { NavLinkProps } from '.'

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    href: '#',
    children: 'W'
  }
} as Meta

export const Default: Story<NavLinkProps> = (args) => <NavLink {...args} />

export const WithImage: Story<NavLinkProps> = (args) => (
  <NavLink {...args}>
    <img src="/servers/tailwind.png" />
  </NavLink>
)

export const Active: Story<NavLinkProps> = (args) => <NavLink {...args} />

Active.args = {
  active: true
}
