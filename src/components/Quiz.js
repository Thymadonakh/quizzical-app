import React, {useState} from "react";

function Quiz(props) {
    const [clicked, setClicked] = useState(false)

    const styles = {
        backgroundColor: clicked ? "#E9D5CA" : "#4D4C7D",
        color: clicked ? "#4D4C7D" : "#E9D5CA"
    }
    
    function answer() {
        setClicked(!clicked)
    }
    return (
        <main>
            <div>
                <h3>Question 1</h3>
            </div>
            <div>
                <button style={styles} onClick={() => answer(1)}>answer 1</button>
                <button style={styles} onClick={() => answer(2)}>answer 1</button>
                <button style={styles} onClick={() => answer(3)}>answer 1</button>
                <button style={styles} onClick={() => answer(4)}>answer 1</button>
            </div>
        </main>
    );
}

export default Quiz;

