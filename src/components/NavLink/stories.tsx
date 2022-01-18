import { Story, Meta } from '@storybook/react'
import Image from 'next/image'
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
    <Image src="/servers/tailwind.png" width={24} height={24} alt="tailwind" />
  </NavLink>
)

export const Active: Story<NavLinkProps> = (args) => <NavLink {...args} />

Active.args = {
  active: true
}
