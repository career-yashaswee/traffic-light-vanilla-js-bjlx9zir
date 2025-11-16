import './styles.css';

// TODO: Create config object with red, yellow, green colors
// TODO: Each color should have: backgroundColor, duration, next
// TODO: Red: 4000ms duration, next: 'green'
// TODO: Yellow: 500ms duration, next: 'red'
// TODO: Green: 3000ms duration, next: 'yellow'

// TODO: Create light function that accepts { backgroundColor }
// TODO: Function should create a div element with class "traffic-light"
// TODO: Set aria-hidden="true" on the element
// TODO: If backgroundColor is provided, set it as style.backgroundColor
// TODO: Return the element

// TODO: Create trafficLight function that accepts ($rootEl, { initialColor, config, layout })
// TODO: Initialize currentColor with initialColor
// TODO: Create container div with class "traffic-light-container"
// TODO: Set aria-live="polite" on container
// TODO: If layout is 'vertical', add class "traffic-light-container--vertical"
// TODO: Create timer variable (let timer = null)
// TODO: Create setTransition function that:
//   - Gets duration and next from config[currentColor]
//   - Sets timer = setTimeout(() => { currentColor = next; renderLoop(); }, duration)
// TODO: Create render function that:
//   - Clears container innerHTML
//   - Sets aria-label to `Current light: ${currentColor}`
//   - Maps over Object.keys(config) to create lights
//   - Only active light (color === currentColor) gets backgroundColor
//   - Appends lights to container
// TODO: Create renderLoop function that calls render() then setTransition()
// TODO: Add beforeunload event listener to clear timer
// TODO: Append container to $rootEl
// TODO: Call renderLoop() to start

// TODO: Call trafficLight with document.getElementById('traffic-light')
// TODO: Pass initialColor: 'green', config, layout: 'vertical'
