import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNum}/{totalQuestions}
      </p>
    </div>
  );
};

export default QuestionCard;
