let sharedVariable = 0; // Shared mutable state

async function increment() {
    // Simulate asynchronous operation
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    const currentValue = sharedVariable;
    // Increment the shared variable
    sharedVariable = currentValue + 1;
}

async function main() {
    // Concurrently call the increment function multiple times
    await Promise.all([increment(), increment(), increment()]);
    console.log(sharedVariable); // Expected output: Inconsistent value due to race condition
}

main();
