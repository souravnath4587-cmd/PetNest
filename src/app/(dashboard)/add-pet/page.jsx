"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold px-6 py-4">Add A Pet : </h2>
      <form
        className="p-6 space-y-8 md:w-3xl w-xl"
        // onSubmit={handleProductFormDataSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="productName" isRequired className="text-gray-900">
              <Label>Product Name</Label>
              <Input placeholder="Silk Linen Shirt" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          {/* <TextField name="country" isRequired>
            <Label>Country</Label>
            <Input placeholder="Indonesia" className="rounded-2xl" />
            <FieldError />
          </TextField> */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label>Category</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Shirt" textValue="Shirt">
                    Shirt
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="T-Shirt" textValue="T-Shirt">
                    T-Shirt
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Jeans-Pants" textValue="Jeans-Pants">
                    Jeans Pants
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Gavadin-Pants" textValue="Gavadin-Pants">
                    Gavadin Pants
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Trousers" textValue="Trousers">
                    Trousers
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Accessories" textValue="Accessories">
                    Accessories
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Category - Updated Select Component */}
          <div>
            <Select
              name="material"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label>Material</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Merino-Wool" textValue="Merino-Wool">
                    Merino Wool
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Pure-Silk" textValue="Pure-Silk">
                    Pure Silk
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Cash-Mere" textValue="Cash-Mere">
                    Cash Mere
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Italian-Linen" textValue="Italian-Linen">
                    Italian Linen
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  {/* <ListBox.Item id="Cultural" textValue="Cultural">
                    Cultural
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Luxury" textValue="Luxury">
                    Luxury
                    <ListBox.ItemIndicator />
                  </ListBox.Item> */}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Price (Taka)</Label>
            <Input type="number" placeholder="1299" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div>
            <Select
              name="size"
              isRequired
              className="w-full"
              placeholder="Select Size"
            >
              <Label>Size</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="S" textValue="S">
                    S
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="M" textValue="M">
                    M
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="L" textValue="L">
                    L
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="XL" textValue="XL">
                    XL
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="XXL" textValue="XXL">
                    XXL
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Duration */}
          <div className="md:col-span-2">
            <TextField name="color" type="text" isRequired>
              <Label>Color</Label>
              <Input placeholder="Navy Blue Color" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate" type="date" isRequired>
              <Label>Departure Date</Label>
              <Input type="date" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          //   isLoading={}
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          Add destination
          {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
        </Button>
      </form>
    </div>
  );
};

export default page;
