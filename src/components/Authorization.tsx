"use client";

const Authorization = () => {
  return (
    <>
      <button className="hidden px-4 py-2 bg-blue-600 text-white rounded-lg">
        შესვლა
      </button>

      <div className="hidden fixed inset-0 m-auto items-center justify-center bg-purple-100 bg-opacity-10 z-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between">
            {" "}
            <h2 className="text-xl font-semibold mb-4">ავტორიზაცია</h2>
            <h2 className="text-xl font-semibold mb-4">ავტორიზაცია</h2>
          </div>

          <input
            type="email"
            placeholder="მეილი"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            placeholder="პაროლი"
            className="w-full p-2 border rounded mb-4"
          />
          <button className="w-full p-2 bg-blue-600 text-white rounded-lg">
            შესვლა
          </button>
          <button className="mt-2 text-gray-500 w-full text-center">
            დახურვა
          </button>
        </div>
      </div>
    </>
  );
};

export default Authorization;
