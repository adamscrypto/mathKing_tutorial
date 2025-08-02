// src/pages/Topics.jsx
import { useState, useEffect } from "react";
import db from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input"

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "topics"));
        const data = querySnapshot.docs.map(doc => doc.data());
        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchTopics();
  }, []);

  const filteredTopics = topics.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen">
      <Input placeholder="Search topics..." value={search} onChange={e => setSearch(e.target.value)} className="mb-4 border-blue-300 shadow-sm" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Topics</h2>
          {filteredTopics.map((topic, index) => (
            <Button key={index} variant="outline" className="w-full mb-2 border-blue-300 hover:bg-blue-100" onClick={() => {
              setSelectedTopic(topic);
              setSelectedSubtopic(null);
            }}>{topic.name}</Button>
          ))}
        </div>

        <div>
          {selectedTopic && (
            <>
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Subtopics of {selectedTopic.name}</h2>
              {selectedTopic.subtopics?.map((sub, index) => (
                <button key={index} className="w-full mb-2 text-left text-blue-700 hover:bg-purple-100" onClick={() => setSelectedSubtopic(sub)}>{sub.title}</button>
              ))}
            </>
          )}
        </div>

        <div>
          {selectedSubtopic && (
            <Card className="shadow-xl border border-purple-100">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-purple-900">{selectedSubtopic.title}</h3>
                <p className="text-sm text-gray-700">{selectedSubtopic.text}</p>
                <div className="aspect-video rounded overflow-hidden">
                  <iframe className="w-full h-full" src={selectedSubtopic.videoUrl} title="Maths Tutorial Video" frameBorder="0" allowFullScreen></iframe>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}