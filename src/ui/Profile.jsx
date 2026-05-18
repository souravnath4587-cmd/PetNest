import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
// import { authClient } from "../../lib/auth-client";
import { MdOutlineDashboard } from "react-icons/md";

const Profile = ({ user }) => {
  return (
    <Dropdown>
      <Button
        className="rounded-xl p-0 overflow-hidden"
        // onClick={handleProfile}
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
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item className="flex flex-col items-start border-b-2 rounded-none">
            <h4 className="font-bold">{user?.name}</h4>
            <p>{user?.email}</p>
          </Dropdown.Item>
          <Dropdown.Item id="my-dashboard" textValue="my-dashboard">
            {/* <SquarePlus className="size-4 shrink-0 text-muted" /> */}
            <Link className="flex items-center gap-4" href={"/my-request"}>
              <MdOutlineDashboard />
              <Label>My Dashboard</Label>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            {/* <SquarePlus className="size-4 shrink-0 text-muted" /> */}
            <Button
              className="rounded-none w-full"
              variant="danger-soft"
              onClick={() => authClient.signOut()}
            >
              LogOut
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default Profile;
