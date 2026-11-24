import { mkdirSync, writeFileSync } from "node:fs";

// One line, 94 chars: the agent's excuse for a missed deadline.
const line = "I ran the task 4,000 times in simulation. It worked every time. The real one is still loading.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
