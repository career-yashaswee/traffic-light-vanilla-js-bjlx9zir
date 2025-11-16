# Traffic Light — Vanilla JavaScript Timers and DOM

Welcome to your traffic light composition! I'm your mentor, and I'll guide you step-by-step to learn JavaScript timers, DOM manipulation, and state machines with vanilla JavaScript.

Difficulty: Beginner  
Estimated time: 1–2 hours

## Summary

Build a traffic light component that automatically cycles through red, yellow, and green lights at predetermined intervals. Learn `setTimeout`, DOM manipulation, state management, and cleanup patterns in vanilla JavaScript.

## What is a Traffic Light Component?

A traffic light is a state machine that cycles through different colors (states) at fixed intervals. Think of it like a timer that automatically switches between colors—green means go, yellow means caution, and red means stop. In programming, this teaches you how to manage time-based state transitions and handle DOM updates.

**Why Traffic Lights Matter:**
- They demonstrate state machines—a fundamental programming pattern
- Building one teaches you JavaScript `setTimeout` and timer management
- They show how to manipulate the DOM dynamically
- Understanding timers is essential for animations, polling, and scheduled tasks
- They're a common interview question that tests your understanding of JavaScript fundamentals

## Learning Outcomes

- Understand how to use `setTimeout` for delayed execution
- Implement timers and cleanup with `clearTimeout`
- Build a state machine pattern in vanilla JavaScript
- Manipulate the DOM dynamically
- Handle component lifecycle and prevent memory leaks

## Prerequisites

- Node.js 18+ installed
- Basic knowledge of HTML, CSS, and JavaScript
- Comfort with the terminal and `npm`
- Understanding of DOM manipulation

## Before You Begin (Environment Checklist)

- `npm --version` works
- Port 5173 available (Vite dev server)
- Git configured (`git --version`)
- Editor with JavaScript and ESLint plugins

---

## Getting Started

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Start the app

- Frontend-only:
  - `npm run dev` → open `http://localhost:5173`

### Step 3: Run tests

- Unit/Integration (Jest):
  ```bash
  npm run test
  ```
- Watch mode:
  ```bash
  npm run test:watch
  ```

### Step 4: Format and lint

```bash
npm run format
npm run lint
```

---

## Project Structure

```
traffic-light/
├── index.html
├── src/
│   ├── index.js
│   ├── styles.css
│   ├── setupTests.js
│   └── __tests__/
├── docs/
│   ├── description.md
│   └── solution.md
├── README.md
├── vite.config.js
├── jest.config.js
└── eslint.config.js
```

---

## Standard Ports

- Frontend (Vite): `http://localhost:5173`

---

## Scripts (package.json)

- `dev`: Vite dev server
- `build`: `vite build`
- `lint`: ESLint check
- `format`: Prettier write
- `format:check`: Prettier check
- `test`: Jest (unit/integration)
- `test:watch`: Jest watch mode
- `preview`: Vite preview (built app)

---

## Configuration Files

Always include:
- `vite.config.js` (Vite configuration)
- `jest.config.js` (Jest with jsdom)
- `eslint.config.js`
- `.prettierrc`
- `babel.config.cjs` (for Jest ES modules)
- `Dockerfile` (for CI/grading)

---

## Requirements Checklist

### Frontend
- [ ] Create config object with red, yellow, green colors
- [ ] Each color has `backgroundColor`, `duration`, and `next` properties
- [ ] Red light: 4000ms duration, next: 'green'
- [ ] Yellow light: 500ms duration, next: 'red'
- [ ] Green light: 3000ms duration, next: 'yellow'
- [ ] Create `light` function that creates DOM elements
- [ ] Create `trafficLight` function that manages state and timers
- [ ] Use `setTimeout` to transition colors after duration
- [ ] Cleanup timer on `beforeunload` event
- [ ] Only active light has backgroundColor style
- [ ] Component has aria-label for accessibility
- [ ] No console errors

---

## Acceptance Criteria

Your solution is complete when:
1. ✓ Traffic light renders with three lights
2. ✓ Lights cycle through green → yellow → red → green
3. ✓ Each light displays for the correct duration
4. ✓ Timer cleanup prevents memory leaks
5. ✓ No console errors
6. ✓ All tests pass
7. ✓ Lint passes (`npm run lint`)

---

## Grading Criteria

- Functionality: 50%
- Code Structure: 20%
- Timer and Cleanup: 20%
- Code Quality (lint/format): 10%

---

## Hints

Start simple, then refine. Layered guidance:
- First nudge: "Create a config object to define each color's duration and next state."
- Deeper: "Use `setTimeout` to schedule the transition to the next color after the duration."
- Deepest: "Remember to clear the timer in a `beforeunload` event listener to prevent memory leaks."

---

## Troubleshooting

- Problem: `npm install` fails  
  Solution: Ensure Node 18+ is installed and try `rm -rf node_modules && npm cache clean --force && npm install`.

- Problem: Frontend 5173 already in use  
  Solution: Stop the conflicting process or change the Vite port in `vite.config.js`.

- Problem: Tests fail unexpectedly  
  Solution: Run `npm run test:watch` and read failing test expectations; ensure you're using fake timers correctly.

- Problem: Timer doesn't cleanup  
  Solution: Make sure you add a `beforeunload` event listener that clears the timer.

- Problem: Lights don't transition  
  Solution: Ensure `setTimeout` is being called and `renderLoop` is invoked after transitions.

---

## Git Workflow

Recommended flow:
1. Create a feature branch:
   ```bash
   git checkout -b feature/traffic-light
   ```
2. Commit with conventional messages:
   ```bash
   git add .
   git commit -m "feat: implement traffic light with setTimeout"
   ```
3. Push:
   ```bash
   git push origin feature/traffic-light
   ```

---

## Code Quality

- Run `npm run lint` and `npm run format` before committing
- Use clear variable names
- Organize code into logical functions
- Add comments for complex logic

### TODO Conventions

- Use `// TODO:` (short, task-focused)
- Place inline where the change is needed
- Keep TODOs concise

---

## Key Concepts You'll Learn

- JavaScript `setTimeout` for delayed execution
- `clearTimeout` for timer cleanup
- DOM manipulation with `createElement` and `append`
- State machine pattern
- Event listeners for cleanup

---

## Next Steps

After finishing:
- Add pause/resume functionality
- Support custom color sequences
- Add sound effects for each transition
- Implement horizontal layout option
- Add animation transitions between colors

---

## Documentation (docs/description.md)

Include:
- Problem Statement and Details
- Use Cases (Primary/Secondary)
- Constraints (Technical + Business Rules)
- Test Data (schemas and examples)
- Requirements Checklist
- Examples and Edge Cases
- Acceptance Criteria
- Hints

---

_Good luck, and happy building!_  
_Your JavaScript Development Mentor_

