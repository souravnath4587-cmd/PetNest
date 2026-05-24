import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <Spinner size="xl" color="warning" />
      <span className="text-md text-muted">All Pets data are loading...</span>
    </div>
  );
};

export default loading;
