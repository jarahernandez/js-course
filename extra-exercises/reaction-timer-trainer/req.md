# User story

- User opens the page and is met with a timer which is centered in the page (eg 0.0s) and another timer (smaller) under it with the 'Best Time' (when the user first enters the page both are set to 0.0s)
- Page will have a neutral color as the background
- Underneath the timer there is a button ('Start')
- This button will change the background color of the page to red
- Also, the button from before will change: it will go from 'Start' to 'Stop'
- There will be a delay in which the 'Stop' button will be disabled and the background will change to red
- After the delay, the color change in the background will change to green and the 'Stop' button will be enabled
- This will be the cue for the user to click the 'Stop' button as fast as possible
- After user clicks on the 'Stop' button, the page will change the timer from 0.0s to whatever time it took the user to react
- If best time, it will also change the smaller timer under the main one to store the best reaction time.

# Improvements to make
- Refactor to a single gameState variable
- Replace all toggle() calls with explicit state-setting
- Add keyboard support (spacebar to stop)
- Do a code review with your friend using your pairing guide