<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper, Input } from 'flowbite-svelte';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import "../../app.css";
    
    export let data
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
    
  </script>
  
  <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Social</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu"/>
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  </Navbar>

<div class="flex w-full">
    <Sidebar>
        <SidebarWrapper>
          <SidebarGroup>
            <SidebarItem href="/app" label="Feed">
            </SidebarItem>
            <SidebarItem href="/app/messages" label="Messsages" {spanClass}>
            </SidebarItem>
            <SidebarItem href="/app/groups" label="Groups" {spanClass}>
            </SidebarItem>
            <SidebarItem href="/app/users" label="Users" {spanClass}>
            </SidebarItem>
            <SidebarItem href="/app/logout" label="Logout" {spanClass}>
            </SidebarItem>
          </SidebarGroup>
        </SidebarWrapper>
      </Sidebar>
    <main class="flex-grow px-8">
        <slot></slot>
    </main>
</div>
