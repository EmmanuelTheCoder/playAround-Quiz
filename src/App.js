import React, { useState } from 'react';
import './App.css';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    
    const handleAnswerOptionClick = (isCorrect) =>{
        if(isCorrect){
            setScore(score + 1);
        }
        
        
        if(currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion + 1);
            
        }else{
            setShowScore(true);
        }
    };
	
	return (
		<div className='app'>
            {showScore ? (
                <div className="score-section">
                    you scored {score} out of {questions.length}
                </div>
            ): (
                <div className="game-panel">
                    <div className="question-section">
                        <div className="question-text">{questions.sort(()=>Math.random() - .5)[currentQuestion].questionText }</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map(answerOption =>(
                            <button onClick={()=> handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                     
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span> / {questions.length}
                        </div>
                    </div>
               
                </div>
            )}
		</div>
	);
}