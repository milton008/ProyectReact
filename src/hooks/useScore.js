import { useState } from 'react';

function useScore() {
    const [score, setScore] = useState(0);

    function incrementScore() {
        if (score + 1 > 5) return;
        setScore(score + 1);
    }
    function decrementScore() {
        if (score - 1 < 0) return;
        setScore(score - 1);
    }
    function resetScore() {
        setScore(0);
    }
    return { score, setScore, decrementScore, incrementScore, resetScore };
}

export default useScore;