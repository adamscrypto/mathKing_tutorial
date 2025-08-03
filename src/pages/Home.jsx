// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "../firebaseConfig";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [topics, setTopics] = useState([]);

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

  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-blue-50 via-white to-purple-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-blue-900">Welcome to the Maths Tutorial Website</h1>
      <p className="text-lg text-gray-700">Learn various maths topics with video and text tutorials.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {topics.map((topic, index) => (
          <Card key={index} className="shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">{topic.name}</h2>
              {topic.subtopics?.map((sub, idx) => (
                <div key={idx} className="mb-6">

                  <div className="aspect-video mt-3 rounded-lg overflow-hidden">
                    <iframe className="w-full h-full" src={sub.videoUrl} title="Tutorial Video" frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <p className="text-lg font-medium text-purple-800">{sub.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{sub.text}</p>
                  
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
