import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className="container glass text-center text-white">
            <h1 className="font-bold text-3xl my-5 text-white text-center">
                Stopwatch
            </h1>
            <h1 className="text-2xl">{count}</h1>
            <div className="space-x-2 mt-10">
                <button
                    onClick={() => setRunning(true)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-3 rounded"
                >
                    Start
                </button>
                <button
                    onClick={() => setRunning(false)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 py-1 px-3 rounded"
                >
                    Pause
                </button>
                <button
                    onClick={() => setRunning(true)}
                    className="bg-gradient-to-r from-sky-500 to-indigo-500 py-1 px-3 rounded"
                >
                    Resume
                </button>
                <button
                    onClick={() => {
                        setCount(0);
                        setRunning(false);
                    }}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-3 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
