// src/hooks/useNews.js
import { useEffect, useState } from "react";
import { ref, onValue, push, serverTimestamp, remove } from "firebase/database";
import { db } from "../firebase";

export function useNews() {
  const [news, setNews]       = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newsRef = ref(db, "news");
    const unsub = onValue(newsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data)
          .map(([id, val]) => ({ id, ...val }))
          .sort((a, b) => b.createdAt - a.createdAt);
        setNews(list);
      } else {
        setNews([]);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const addNews = (title, body, category) =>
    push(ref(db, "news"), {
      title,
      body,
      category: category || "General",
      createdAt: serverTimestamp(),
    });

  const deleteNews = (id) => remove(ref(db, `news/${id}`));

  return { news, loading, addNews, deleteNews };
}
