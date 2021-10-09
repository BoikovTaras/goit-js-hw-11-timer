const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            console.log('start -> currentTime', currentTime)
        }, 1000);
    }
};

timer.start();