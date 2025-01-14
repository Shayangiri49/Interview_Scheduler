import React from "react";
import { IoMdClose } from "react-icons/io";

const InterviewForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setShowModal,
  selectedInterview,
}) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          {selectedInterview ? "Edit Interview" : "Schedule Interview"}
        </h2>
        <button onClick={() => setShowModal(false)} className="text-gray-500">
          <IoMdClose size={24} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Candidate Name</label>
          <input
            type="text"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            required
          />
        </div>
        <div>
          <label>Interviewer Name</label>
          <input
            type="text"
            name="interviewerName"
            value={formData.interviewerName}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            required
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            required
          />
        </div>
        <div>
          <label>Interview Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
          >
            <option value="Technical">Technical</option>
            <option value="HR">HR</option>
            <option value="Behavioral">Behavioral</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          {selectedInterview ? "Update Interview" : "Schedule Interview"}
        </button>
      </form>
    </div>
  </div>
);

export default InterviewForm;
