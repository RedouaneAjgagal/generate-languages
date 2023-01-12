import React, { useState } from 'react'

const Counter = (props) => {
    const [count, setCount] = useState({ val: 'START', generating: false, animation: '' });
    const generateHandler = () => {
        if (props.languages.length === 0 || count.generating) return;
        setCount({ val: 3, generating: true });
        const generateLang = Math.floor(Math.random() * (props.languages).length);
        const countDown = setInterval(() => {
            setCount((prev) => {
                if (prev.val === 1) {
                    clearInterval(countDown);
                    return { val: props.languages[generateLang].lang, generating: false, animation: 'slide-in-bck-bottom' };
                }
                return { ...prev, val: prev.val - 1 };
            });
        }, 1000);
    }

    return (
        <main>
            <h2 className={count.animation}>{count.val}</h2>
            <button onClick={generateHandler}>GENERATE RANDOMLY</button>
            <p>Made With Love 💚</p>
        </main>
    )
}

export default Counter