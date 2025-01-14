import React from "react";

const DeleteModal = ({ confirmDelete, cancelDelete }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
      <p className="mb-6">Are you sure you want to delete this interview?</p>
      <div className="flex gap-4">
        <button
          onClick={confirmDelete}
          className="flex-1 bg-red-600 text-white py-2 rounded-lg"
        >
          Delete
        </button>
        <button
          onClick={cancelDelete}
          className="flex-1 bg-gray-300 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default DeleteModal;
