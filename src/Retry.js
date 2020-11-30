import React, {useState} from 'react';

const Retry = () =>{
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
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleValidation = (key) =>{
        if(key){
            setScore(score + 1);
        }
        
        if(questionNumber + 1 < questions.length){
            setQuestionNumber(questionNumber + 1);
        }else{
            setShowScore(true);
        }
    }
    return(
        <div>
            {showScore ? (
                <div> your score is {score} of {questions.length} </div>
            ): (
                <>
                <div>
                    <p>{questions[questionNumber].questionText}</p>
                   {questions[questionNumber].answerOptions.map(answer=>{
                       return <button onClick={()=>handleValidation(answer.isCorrect)}>{questions[questionNumber].questionText}</button>
                   })}
                </div>
               </> 
            )}
        </div>
    )
}
export default Retry;