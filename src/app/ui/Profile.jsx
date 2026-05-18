import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import Image from "next/image";

const Profile = ({ user }) => {
  return (
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
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
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
  );
};

export default Profile;
