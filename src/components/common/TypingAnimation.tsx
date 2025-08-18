import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  onComplete?: () => void;
  className?: string;
  speed?: number;
}

const TypingAnimation = ({ 
  text, 
  onComplete, 
  className = "", 
  speed = 50 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    }
  }, [displayedText, text, speed, onComplete, isComplete]);

  return (
    <div className={`${className} ${isComplete ? '' : 'typing-text'}`}>
      {displayedText}
    </div>
  );
};

export default TypingAnimation;