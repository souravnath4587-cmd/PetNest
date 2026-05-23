import { Button, Table } from "@heroui/react";
import Link from "next/link";

const TablePage = ({ adoptPets, setAdoptPets }) => {
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");

    if (!confirmDelete) return;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/my-request/${id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    if (data.deletedCount > 0) {
      // remove from UI instantly
      setAdoptPets((prev) => prev.filter((pet) => pet._id !== id));
    }
  };

  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[650]">
            <Table.Header>
              <Table.Column isRowHeader>Pet Name</Table.Column>
              <Table.Column>Request Date</Table.Column>
              <Table.Column>Pickup Date</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {adoptPets.map((pet) => (
                <Table.Row key={pet._id}>
                  <Table.Cell>{pet.petName}</Table.Cell>
                  <Table.Cell>{pet.requestDate}</Table.Cell>
                  <Table.Cell>{pet.pickupDate}</Table.Cell>
                  <Table.Cell>{pet.status}</Table.Cell>
                  {pet.status === "approved" || pet.status === "rejected" ? (
                    <Table.Cell className="flex gap-2">
                      <Button className="rounded-none" variant="outline">
                        <Link className="p-4" href={`/all-pets/${pet.petId}`}>
                          view
                        </Link>
                      </Button>
                    </Table.Cell>
                  ) : (
                    <Table.Cell className="flex gap-2">
                      <Button className="rounded-none" variant="outline">
                        <Link className="p-4" href={`/all-pets/${pet.petId}`}>
                          view
                        </Link>
                      </Button>
                      <Button
                        className="rounded-none"
                        variant="danger-soft"
                        onClick={() => handleDelete(pet._id)}
                      >
                        Cancel
                      </Button>
                    </Table.Cell>
                  )}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default TablePage;
