// src/pages/Admin.jsx
import { useState } from "react";
import db from '../firebaseConfig'
import { addDoc, collection } from "firebase/firestore";
import { Input } from "../components/ui/input";

export default function Admin() {
  const [name, setName] = useState("");
  const [subtopics, setSubtopics] = useState([{ title: "", text: "", videoUrl: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "topics"), { name, subtopics });
      alert("Topic added successfully");
      setName("");
      setSubtopics([{ title: "", text: "", videoUrl: "" }]);
    } catch (error) {
      console.error("Error adding topic:", error);
      alert("Failed to add topic. Check console for details.");
    }
  };

  const updateSubtopic = (index, field, value) => {
    const newSubtopics = [...subtopics];
    newSubtopics[index][field] = value;
    setSubtopics(newSubtopics);
  };

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-blue-900">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-blue-50 p-6 rounded-xl shadow-lg">
        <Input placeholder="Topic Name" value={name} onChange={(e) => setName(e.target.value)} className="border-blue-300" />
        {subtopics.map((sub, idx) => (
          <div key={idx} className="grid md:grid-cols-3 gap-4">
            <Input placeholder="Subtopic Title" value={sub.title} onChange={(e) => updateSubtopic(idx, "title", e.target.value)} className="border-purple-300" />
            <Input placeholder="Subtopic Text" value={sub.text} onChange={(e) => updateSubtopic(idx, "text", e.target.value)} className="border-purple-300" />
            <Input placeholder="YouTube Video URL" value={sub.videoUrl} onChange={(e) => updateSubtopic(idx, "videoUrl", e.target.value)} className="border-purple-300" />
          </div>
        ))}
        <button type="button" onClick={() => setSubtopics([...subtopics, { title: "", text: "", videoUrl: "" }])}>+ Add Subtopic</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
