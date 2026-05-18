"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown, Kbd, Label } from "@heroui/react";

// import {
//   FloppyDisk,
//   FolderOpen,
//   SquarePlus,
//   TrashBin,
// } from "@gravity-ui/icons";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleProfile = () => {
    console.log("Profile button is clicked");
  };

  return (
    <div className="border border-white/5 shadow">
      <nav className="container mx-auto flex  justify-between items-center uppercase py-4 px-4 md:px-0 relative">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold uppercase">
            Pet<span className="text-[#d4a574]">Nest</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="uppercase flex gap-16 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/shop">All Pets</Link>
            </li>
          </ul>
        </div>

        {/* Login */}
        <div className="hidden md:flex md:gap-4 items-center">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 mx-4 rounded-full border"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
          {user ? (
            <div className="flex gap-2 items-center">
              <h2>
                Hello,{" "}
                <span className="text-[#d4a574] font-bold">
                  {user.name}
                </span>{" "}
              </h2>
              <Dropdown>
                <Button
                  className="rounded-xl p-0 overflow-hidden"
                  onClick={handleProfile}
                  aria-label="Menu"
                  variant="secondary"
                >
                  <Image
                    className=""
                    src={user?.image}
                    width={60}
                    height={40}
                    alt={`${user?.name} image`}
                  ></Image>
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    <Dropdown.Item id="new-file" textValue="New file">
                      {/* <SquarePlus className="size-4 shrink-0 text-muted" /> */}
                      <Label>New file</Label>
                      <Kbd className="ms-auto" slot="keyboard" variant="light">
                        <Kbd.Abbr keyValue="command" />
                        <Kbd.Content>N</Kbd.Content>
                      </Kbd>
                    </Dropdown.Item>
                    <Dropdown.Item id="open-file" textValue="Open file">
                      {/* <FolderOpen className="size-4 shrink-0 text-muted" /> */}
                      <Label>Open file</Label>
                      <Kbd className="ms-auto" slot="keyboard" variant="light">
                        <Kbd.Abbr keyValue="command" />
                        <Kbd.Content>O</Kbd.Content>
                      </Kbd>
                    </Dropdown.Item>
                    <Dropdown.Item id="save-file" textValue="Save file">
                      {/* <FloppyDisk className="size-4 shrink-0 text-muted" /> */}
                      <Label>Save file</Label>
                      <Kbd className="ms-auto" slot="keyboard" variant="light">
                        <Kbd.Abbr keyValue="command" />
                        <Kbd.Content>S</Kbd.Content>
                      </Kbd>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="delete-file"
                      textValue="Delete file"
                      variant="danger"
                    >
                      {/* <TrashBin className="size-4 shrink-0 text-danger" /> */}
                      <Label>Delete file</Label>
                      <Kbd className="ms-auto" slot="keyboard" variant="light">
                        <Kbd.Abbr keyValue="command" />
                        <Kbd.Abbr keyValue="shift" />
                        <Kbd.Content>D</Kbd.Content>
                      </Kbd>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
              <Button className="rounded-none " variant="danger">
                {" "}
                <Link
                  href={"/login"}
                  onClick={async () => await authClient.signOut()}
                >
                  Logout{" "}
                </Link>{" "}
              </Button>
            </div>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-[#d4a574] p-5 md:hidden">
            <ul className="flex flex-col gap-6 text-center uppercase">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/shop">All Pets </Link>
              </li>

              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
