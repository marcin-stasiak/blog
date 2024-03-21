import { useState } from 'react';
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar maxWidth="2xl" onMenuOpenChange={setIsOpen}>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">Blog</Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Test
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>

      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#" className="w-full" size="lg">
            Test
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
};

export default Header;