import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const InterviewList = ({ interviews, onEdit, onDelete }) => (
  <div className="mt-6">
    <h2 className="text-2xl font-bold mb-4">Upcoming Interviews</h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {interviews.map((interview) => (
        <div key={interview.id} className="bg-white w-auto p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{interview.candidateName}</h3>
              <p>{interview.type} Interview</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => onEdit(interview)}>
                <FaEdit className="text-blue-600" />
              </button>
              <button onClick={() => onDelete(interview)}>
                <FaTrash className="text-red-600" />
              </button>
            </div>
          </div>
          <p>Interviewer: {interview.interviewerName}</p>
          <p>
            Date: {interview.date} at {interview.time}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default InterviewList;
