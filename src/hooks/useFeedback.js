// src/hooks/useFeedback.js
import { useEffect, useState } from "react";
import { ref, onValue, push, serverTimestamp, remove } from "firebase/database";
import { db } from "../firebase";

export function useFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    const fbRef = ref(db, "feedbacks");
    const unsub = onValue(fbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data)
          .map(([id, val]) => ({ id, ...val }))
          .sort((a, b) => b.createdAt - a.createdAt);
        setFeedbacks(list);
      } else {
        setFeedbacks([]);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const addFeedback = (name, message, rating) =>
    push(ref(db, "feedbacks"), {
      name:      name.trim(),
      message:   message.trim(),
      rating:    rating || 0,
      createdAt: serverTimestamp(),
    });

  const deleteFeedback = (id) => remove(ref(db, `feedbacks/${id}`));

  return { feedbacks, loading, addFeedback, deleteFeedback };
}
