"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;     // 1文字ずつ打つ速さ
  deleteSpeed?: number; // 消す速さ
  delay?: number;     // 打ち終わった後の待ち時間
}

export default function Typewriter({
  text,
  speed = 100,
  deleteSpeed = 50,
  delay = 1500,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // 打つ
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    }

    // 打ち終わり → 待機 → 消し始め
    else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    }

    // 消す
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deleteSpeed);
    }

    // 全消去 → リセット
    else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, deleteSpeed, delay]);

  return (
    <span className="neon-green text-4xl md:text-6xl font-mono">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
