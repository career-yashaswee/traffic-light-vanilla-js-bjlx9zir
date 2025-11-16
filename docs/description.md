# Traffic Light Component (Vanilla JavaScript)

## Metadata

- Title: Traffic Light Component
- Primary Concept: JavaScript Timers and DOM Manipulation
- Difficulty: Beginner
- Estimated Duration: 1–2 hours

## Problem Statement

Build a traffic light component where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. A traffic light is a state machine that cycles through different colors (states) at fixed intervals. Each color should be displayed for a specific duration before automatically transitioning to the next color in the sequence.

## Problem Details

1. Frontend: Create a config object defining each light's color, duration, and next state
2. Frontend: Red light displays for 4000ms, then transitions to green
3. Frontend: Yellow light displays for 500ms, then transitions to red
4. Frontend: Green light displays for 3000ms, then transitions to yellow
5. Frontend: Create `light` function to generate DOM elements
6. Frontend: Create `trafficLight` function to manage state and timers
7. Frontend: Use `setTimeout` to schedule transitions
8. Frontend: Cleanup timer on `beforeunload` event
9. Frontend: Only the active light displays its backgroundColor
10. Error handling/UX: Component should handle page unload gracefully

## Use Cases

### Primary Use Case

User loads the page with a traffic light component. The light starts on green (or specified initial color). After 3000ms, it automatically transitions to yellow. After 500ms, it transitions to red. After 4000ms, it transitions back to green, and the cycle repeats indefinitely.

### Secondary Use Cases

- Component receives `initialColor` parameter → That color is active on initial render
- Page unloads while timer is active → Timer is cleaned up, no errors
- Multiple traffic light instances → Each maintains independent state and timing
- Component receives custom config → Works with any color sequence and durations

## Constraints

### Technical Constraints

| Constraint | Value | Description |
|-----------|-------|-------------|
| Frontend Port | `5173` | Vite development server |
| Backend Port | N/A | Frontend-only composition |
| API Prefix | N/A | No API used |
| Validation | N/A | No server validation required |
| Language | Vanilla JavaScript | No frameworks |

### Business Rules

1. Red light must display for 4000ms
2. Yellow light must display for 500ms
3. Green light must display for 3000ms
4. Sequence must loop indefinitely: green → yellow → red → green
5. Only one light can be active (colored) at a time

### Focus and Limitations

- Do:
  - Focus on `setTimeout` and timer management
  - Implement proper cleanup to prevent memory leaks
  - Use vanilla JavaScript (no frameworks)
  - Keep code modular with functions
- Don't:
  - Don't use external libraries for timers
  - Don't add server code or routing
  - Don't implement pause/resume unless specified

## Input/Output Contract

### Data Format

```js
const config = {
  red: {
    backgroundColor: 'red',    // required - CSS color value
    duration: 4000,             // required - milliseconds to display
    next: 'green',              // required - next color key
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};
```

### Function Signatures

```js
function light({ backgroundColor }) {
  // Returns: DOM element (div) with class "traffic-light"
}

function trafficLight($rootEl, { initialColor, config, layout }) {
  // $rootEl: DOM element to append traffic light to
  // initialColor: string (default: 'green')
  // config: object with color configurations
  // layout: 'vertical' | 'horizontal' (default: 'vertical')
}
```

## Test Data

The component uses the following default configuration:

```js
const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};
```

## Project Structure

```
traffic-light/
├── index.html          # HTML structure
├── src/
│   ├── index.js        # Main JavaScript (user implements)
│   └── styles.css      # Styles
└── docs/
    └── description.md
```

## Provided Assets

- Basic HTML structure in `index.html`
- Test file with mock config in `src/__tests__/index.test.js`
- Basic CSS in `src/styles.css`

## Requirements Checklist

### Frontend Requirements
- [ ] Config object created with red, yellow, green colors
- [ ] Each color has `backgroundColor`, `duration`, and `next` properties
- [ ] Red: 4000ms duration, next: 'green'
- [ ] Yellow: 500ms duration, next: 'red'
- [ ] Green: 3000ms duration, next: 'yellow'
- [ ] `light` function creates DOM elements
- [ ] `trafficLight` function manages state and timers
- [ ] Uses `setTimeout` to schedule transitions
- [ ] Cleanup timer on `beforeunload` event
- [ ] Only active light has backgroundColor style
- [ ] Component has `aria-label` for accessibility
- [ ] No console errors

## Examples

### Example 1: Basic Traffic Light Cycle

**Input:**  
```js
trafficLight(document.getElementById('traffic-light'), {
  initialColor: 'green',
  config,
  layout: 'vertical',
});
```

**Process:**  
1. Component initializes with `currentColor = 'green'`
2. `setTimeout` sets timer for 3000ms
3. After 3000ms, `currentColor = 'yellow'` and `renderLoop()` is called
4. `setTimeout` sets timer for 500ms
5. After 500ms, transitions to 'red'
6. After 4000ms, transitions back to 'green'
7. Cycle repeats

**Output:**  
Traffic light automatically cycles through green → yellow → red → green with correct durations.

### Example 2: Custom Initial Color

**Input:**  
```js
trafficLight(document.getElementById('traffic-light'), {
  initialColor: 'red',
  config,
  layout: 'vertical',
});
```

**Process:**  
1. Component initializes with `currentColor = 'red'`
2. Red light is active (has backgroundColor)
3. After 4000ms, transitions to 'green'
4. Continues normal cycle

**Output:**  
Traffic light starts on red, then follows normal sequence.

## Key Concepts to Understand

1. **setTimeout** — JavaScript function to execute code after delay
2. **clearTimeout** — JavaScript function to cancel scheduled timeout
3. **DOM Manipulation** — Creating and modifying DOM elements
4. **State Machines** — Pattern where component cycles through defined states
5. **Event Listeners** — Handling page lifecycle events like `beforeunload`

## Acceptance Criteria

Your solution is complete when:
1. Core functionality works end-to-end without errors
2. Lights cycle through correct sequence with correct durations
3. Timer cleanup prevents memory leaks
4. Only active light displays its color
5. No console errors
6. All tests pass
7. Lint passes (`npm run lint`)

## Success Signals

- On page load, traffic light displays with one active light
- Light automatically transitions to next color after correct duration
- Sequence loops indefinitely: green → yellow → red → green
- No memory leaks (timers are cleaned up)
- No console errors

## Hints

Offer layered nudges to help learners get unstuck:

- Start by creating the config object with all three colors and their properties
- Create a `light` function that takes `{ backgroundColor }` and returns a DOM element
- Create a `trafficLight` function that manages state with a `currentColor` variable
- Use `setTimeout` to schedule transitions based on `config[currentColor].duration`
- Call `renderLoop()` after each transition to update the display and schedule the next transition
- Add a `beforeunload` event listener to clear the timer when the page unloads

## Performance Notes

- Use fake timers in tests to avoid waiting for actual durations
- Ensure cleanup prevents memory leaks from orphaned timers
- Consider using `requestAnimationFrame` for smoother visual updates if needed

## Next Steps After Completion

Suggest natural follow-ups that deepen the concept:

- Add pause/resume functionality with a button
- Support custom color sequences (e.g., 4-color traffic light)
- Add smooth CSS transitions between color changes
- Implement horizontal layout option
- Add sound effects for each transition
- Create multiple synchronized traffic lights

