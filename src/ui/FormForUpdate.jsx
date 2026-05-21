"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const FormForUpdatePage = ({ petData }) => {
  const handlePetFormUpdated = async (e) => {
    console.log("update button is click");
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatePetData = Object.fromEntries(formData.entries());
    console.log(updatePetData);

    const res = await fetch(`http://localhost:5000/all-pets/${petData?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePetData),
    });
    const data = await res.json();
    if (!data) {
      toast.error("UnAuthorize...");
    } else {
      toast.success("Successfully Updated..");
      redirect("/my-listing");
    }
  };
  return (
    <div className="shadow-xl p-4 border-2 border-orange/5">
      <form className="p-6 space-y-8 w-full " onSubmit={handlePetFormUpdated}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField
              name="PetName"
              className="text-gray-900"
              defaultValue={petData?.PetName}
            >
              <Label>Pet Name :</Label>
              <Input placeholder="Bella" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField
            name="location"
            isRequired
            defaultValue={petData?.location}
          >
            <Label>Location</Label>
            <Input placeholder="Indonesia" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div>
            <Select
              name="species"
              isRequired
              className="w-full"
              placeholder="Select species"
              defaultValue={petData?.species}
            >
              <Label>Species</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Dog" textValue="Dog">
                    Dog
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Cat" textValue="Cat">
                    Cat
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Bird" textValue="Bird">
                    Bird
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Monkey" textValue="Monkey">
                    Monkey
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Horse" textValue="Horse">
                    Horse
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Breed - Updated Select Component */}
          <div>
            <Select
              name="breed"
              isRequired
              className="w-full"
              placeholder="Select Breed"
              defaultValue={petData?.breed}
            >
              <Label>Breed</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Labrador" textValue="Labrador">
                    Labrador
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="German-Shepherd"
                    textValue="German Shepherd"
                  >
                    German Shepherd
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Bull-Dog" textValue="Bull Dog">
                    Bull Dog
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Persian" textValue="Persian">
                    Persian
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Bengal" textValue="Bengal">
                    Bengal
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Parrot" textValue="Parrot">
                    Parrot
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Cockaticl" textValue="Cockaticl">
                    Cockaticl
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Arabian" textValue="Arabian">
                    Arabian
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Morgan" textValue="Morgan">
                    Morgan
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField
            name="age"
            type="number"
            isRequired
            defaultValue={petData?.age}
          >
            <Label>Age (Years)</Label>
            <Input type="number" placeholder="2 or 3" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div>
            <Select
              name="gender"
              isRequired
              className="w-full"
              placeholder="Select Gender"
              defaultValue={petData?.gender}
            >
              <Label>Gender </Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Male" textValue="Male">
                    Male
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Female" textValue="Female">
                    Female
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div>
            <Select
              name="health"
              isRequired
              className="w-full"
              placeholder="Healthy"
              defaultValue={petData?.health}
            >
              <Label>Health Status </Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Healthy" textValue="Healthy">
                    Healthy
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Sick" textValue="Sick">
                    Sick
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Injured" textValue="Injured">
                    Injured
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Recovering" textValue="Recovering">
                    Recovering
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Disable" textValue="Disable">
                    Disable
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div>
            <Select
              name="vaccination"
              isRequired
              className="w-full"
              placeholder="Vaccinated"
              defaultValue={petData?.vaccination}
            >
              <Label>Vaccination Status </Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="text-gray-800">
                  <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                    Vaccinated
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Not-Vaccinated" textValue="Not Vaccinated">
                    Not Vaccinated
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="Partially-Vaccinated"
                    textValue="Partially Vaccinated"
                  >
                    Partially Vaccinated
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="UnKnown" textValue="UnKnown">
                    UnKnown
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Duration */}
          <div className="">
            <TextField
              name="adoptionFee"
              type="number"
              isRequired
              defaultValue={petData?.adoptionFee}
            >
              <Label>Adoption Fee</Label>
              <Input placeholder="20900" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField
              name="imageUrl"
              isRequired
              defaultValue={petData?.imageUrl}
            >
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Owner Email */}
          <div className="md:col-span-2">
            <TextField
              name="departureDate"
              type="date"
              isRequired
              defaultValue={petData?.departureDate}
            >
              <Label>Departure Date</Label>
              <Input type="date" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>
          {/* Description */}
          <div className="md:col-span-2">
            <TextField
              name="description"
              isRequired
              defaultValue={petData?.description}
            >
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
          Update
          {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
        </Button>
      </form>
    </div>
  );
};

export default FormForUpdatePage;
