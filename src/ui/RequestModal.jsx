"use client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const RequestModalPage = ({
  id,
  petName,
  petId,
  userName,
  userEmail,
  pickupDate,
  requestDate,
  status,
  message,
}) => {
  const router = useRouter();

  const handleStatusChange = async (id, petId, status) => {
    const adoptRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/my-request/${petId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      },
    );
    const adoptData = await adoptRes.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      },
    );
    const data = await res.json();
    router.refresh();
  };

  return (
    <Modal>
      <Button
        className="
                    bg-black
                    text-white
                    rounded-2xl
                    w-full
                    py-3
                    font-medium
                    hover:opacity-90
                    transition
                  "
      >
        Requests
      </Button>
      {/* <Button variant="secondary">Open Modal</Button> */}
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="md:max-w-[450] max-w-[350]">
            <Modal.CloseTrigger />
            <h4 className="flex flex-row gap-2 items-center text-sm font-bold my-2">
              <RxAvatar /> Request For{" "}
              <span className="text-orange-600">{petName}</span>
            </h4>
            <Modal.Header className="flex flex-row items-start justify-between">
              <span className="font-bold my-0">
                {userName}
                <br />
                {userEmail}
              </span>
              <span className="text-red-500">{status}</span>
            </Modal.Header>
            <Modal.Body>
              <div className="flex md:flex-row flex-col items-start md:gap-4 my-2">
                <p className="text-sm">
                  <span className="font-bold">Pick Up Date :</span>
                  {pickupDate}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Request Date :</span>
                  {requestDate}
                </p>
              </div>
              <div className="w-full rounded-xl p-2 border-2 ">
                <p>{message}</p>
              </div>
            </Modal.Body>
            {status === "pending" ? (
              <Modal.Footer className="flex flex-row justify-around gap-4">
                <Button
                  className="rounded-xl w-full bg-[#d41574]"
                  onClick={() => handleStatusChange(id, petId, "approved")}
                >
                  Approved
                </Button>
                <Button
                  className="rounded-xl w-full"
                  variant="danger-soft"
                  onClick={() => handleStatusChange(id, petId, "rejected")}
                >
                  Rejected
                </Button>
              </Modal.Footer>
            ) : (
              ""
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default RequestModalPage;
