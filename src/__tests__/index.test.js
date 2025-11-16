import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';

// Load the HTML and execute the script
async function loadTrafficLight() {
  // Clear any existing content
  document.body.innerHTML = '';
  
  // Set up the DOM structure
  document.body.innerHTML = `
    <div class="wrapper">
      <div id="traffic-light"></div>
    </div>
  `;

  // Reset modules to ensure the IIFE runs again
  jest.resetModules();
  
  // Import and execute the traffic light script
  // The IIFE will run immediately when the module is evaluated
  await import('../index.js');

  // Flush any pending microtasks and advance timers by 0 to ensure
  // the script has executed and any initial setTimeout has been scheduled
  await Promise.resolve();
  jest.advanceTimersByTime(0);
}

describe('Traffic Light Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    document.body.innerHTML = '';
  });

  test('renders traffic light container', async () => {
    await loadTrafficLight();
    const container = screen.getByLabelText(/Current light/i);
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('traffic-light-container');
  });

  test('starts with initial color', async () => {
    await loadTrafficLight();
    const container = screen.getByLabelText(/Current light: green/i);
    expect(container).toBeInTheDocument();
  });

  test('transitions to next color after duration', async () => {
    await loadTrafficLight();
    
    expect(screen.getByLabelText(/Current light: green/i)).toBeInTheDocument();
    
    jest.advanceTimersByTime(3000);
    
    await waitFor(
      () => {
        expect(screen.getByLabelText(/Current light: yellow/i)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  test('loops through all colors', async () => {
    await loadTrafficLight();
    
    // Green -> Yellow (3000ms)
    jest.advanceTimersByTime(3000);
    await waitFor(
      () => {
        expect(screen.getByLabelText(/Current light: yellow/i)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
    
    // Yellow -> Red (500ms)
    jest.advanceTimersByTime(500);
    await waitFor(
      () => {
        expect(screen.getByLabelText(/Current light: red/i)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
    
    // Red -> Green (4000ms)
    jest.advanceTimersByTime(4000);
    await waitFor(
      () => {
        expect(screen.getByLabelText(/Current light: green/i)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  }, 10000);

  test('only active light has backgroundColor', async () => {
    await loadTrafficLight();
    
    await waitFor(
      () => {
        const container = screen.getByLabelText(/Current light/i);
        expect(container).toBeInTheDocument();
        const lights = container.querySelectorAll('.traffic-light');
        expect(lights.length).toBeGreaterThan(0);
        
        let activeCount = 0;
        lights.forEach((light) => {
          if (light.style.backgroundColor) {
            activeCount++;
          }
        });
        
        expect(activeCount).toBe(1);
      },
      { timeout: 2000 }
    );
  }, 5000);
});

