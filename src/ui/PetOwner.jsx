const PetOwnerPage = () => {
  return (
    <div className="max-w-md mx-auto mt-6 p-4 h-40 border border-red-200 bg-red-50 rounded-xl shadow-sm">
      <h2 className="text-red-600 font-semibold text-lg">Access Restricted</h2>

      <p className="text-gray-700 mt-2 text-sm leading-relaxed">
        Pet owners are not allowed to submit adoption requests. This feature is
        available only for adopters or general users.
      </p>

      <div className="mt-3 text-xs text-red-500 font-medium">
        🚫 You are logged in as a Pet Owner
      </div>
    </div>
  );
};

export default PetOwnerPage;
