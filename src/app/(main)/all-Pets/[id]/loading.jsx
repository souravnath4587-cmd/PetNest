"use client";
import { Spinner } from "@heroui/react";
import { useSearchParams } from "next/navigation";

const loading = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  console.log(name);

  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <Spinner size="xl" color="warning" />
      <span className="text-md text-muted">
        {name} information is loading...
      </span>
    </div>
  );
};

export default loading;
