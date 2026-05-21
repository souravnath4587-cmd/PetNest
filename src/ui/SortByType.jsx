"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import { BiDownArrowAlt } from "react-icons/bi";

const SortByType = ({ handleSortBySpecies }) => {
  return (
    <Dropdown>
      <Button
        aria-label="Menu"
        className="rounded-none text-lg py-2"
        variant="outline"
      >
        Select Species <BiDownArrowAlt />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => handleSortBySpecies(key)}>
          <Dropdown.Item id="dog" textValue="dog">
            <Label>Dog</Label>
          </Dropdown.Item>
          <Dropdown.Item id="bird" textValue="bird">
            <Label>Bird</Label>
          </Dropdown.Item>
          <Dropdown.Item id="horse" textValue="horse">
            <Label>Horse</Label>
          </Dropdown.Item>
          <Dropdown.Item id="cat" textValue="cat">
            <Label>Cat</Label>
          </Dropdown.Item>
          {/* <Dropdown.Item
            id="delete-file"
            textValue="Delete file"
            variant="danger"
          >
            <Label>Delete file</Label>
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default SortByType;
