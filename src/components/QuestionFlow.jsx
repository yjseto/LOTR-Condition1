import { useState } from "react";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import {generateImage} from "../utils/generateImage";

export default function QuestionFlow() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const questions = [
    "How would you describe how you're feeling right now?",
    "Did you journey with fellow travelers, or were you traveling the road alone today?",
    "What kind of journey did today feel like?",
    "What race best describes how you're feeling?",
    "If your feelings had an aesthetic, what would it be?",
  ];

  const handleStart = () => setStarted(true);

  const handleNext = async () => {
    const updatedAnswers = { ...answers, [questions[currentQuestion]]: inputValue };
    setAnswers(updatedAnswers);
    setInputValue(""); 

    // If not last question → go to next
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    // Last question → generate image
    setLoading(true);
    try {
      const image = await generateImage(updatedAnswers);
      setImageUrl(image);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Something went wrong while summoning your vision.");
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setImageUrl(null);
  };

  if (!started)
    return (
      <div className="text-center space-y-4">
        <p className="text-xl font-lotrLower text-lotrParchment">
          w/ Shae
        </p>
        <button onClick={handleStart} className="btn-primary mt-4">
          Start
        </button>
      </div>
    );

  if (loading)
    return (
      <p className="font-lotrLower text-lotrParchment mt-4 animate-pulse">
        Summoning your thoughts from Middle-earth...
      </p>
    );

  if (imageUrl) return <ResultScreen imageUrl={imageUrl} onRestart={handleRestart} />;

  return (
    <QuestionCard
      question={questions[currentQuestion]}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onNext={handleNext}
      isLast={currentQuestion === questions.length - 1}
    />
  );
}
