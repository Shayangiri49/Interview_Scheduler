import React, { useState } from "react";
import CalendarView from "./components/CalendarView";
import InterviewForm from "./components/InterviewForm";
import InterviewList from "./components/InterviewList";
import DeleteModal from "./components/DeleteModal";
import localizer from "./utils/localizer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css';

const App = () => {
  const [interviews, setInterviews] = useState([]);
  const [formData, setFormData] = useState({
    candidateName: "",
    interviewerName: "",
    date: "",
    time: "",
    type: "Technical",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = selectedInterview ? selectedInterview.id : Date.now();
    const interview = { ...formData, id };
    if (selectedInterview) {
      setInterviews(interviews.map((i) => (i.id === id ? interview : i)));
      toast.success("Interview updated!");
    } else {
      setInterviews([...interviews, interview]);
      toast.success("Interview scheduled!");
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    setInterviews(interviews.filter((i) => i.id !== toDelete.id));
    setDeleteModal(false);
    toast.success("Interview deleted!");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Interview Scheduler</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6"
      >
        Schedule New Interview
      </button>
      <div className="flex flex-col lg:flex-row gap-3">
      <CalendarView
        localizer={localizer}
        events={interviews.map((i) => ({
          id: i.id,
          title: i.candidateName,
          start: new Date(`${i.date}T${i.time}`),
          end: new Date(`${i.date}T${i.time}`),
        }))}
        onSelectEvent={(event) =>
          setSelectedInterview(interviews.find((i) => i.id === event.id))
        }
      />
      <InterviewList
        interviews={interviews}
        onEdit={(interview) => {
          setSelectedInterview(interview);
          setFormData(interview);
          setShowModal(true);
        }}
        onDelete={(interview) => {
          setToDelete(interview);
          setDeleteModal(true);
        }}
      />
      </div>
      
      {showModal && (
        <InterviewForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setShowModal={setShowModal}
          selectedInterview={selectedInterview}
        />
      )}
      {deleteModal && (
        <DeleteModal
          confirmDelete={handleDelete}
          cancelDelete={() => setDeleteModal(false)}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
