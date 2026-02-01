🧠 JS Requirements
Core behavior

Clicking a question:

Toggles visibility of its answer

Adds/removes the active class on .faq-item

Constraints (these matter)

❌ No inline HTML event handlers

❌ No style.display = ...

❌ No duplicate listeners on each element

✅ Use event delegation

✅ Use classList

🔥 Stretch Goals (do at least one)
1️⃣ Only One Open at a Time

When opening one FAQ item:

Automatically close any other open item

2️⃣ Add CSS Transition

Animate the opening/closing (hint: max-height, opacity)

Still no inline styles in JS

3️⃣ Keyboard Accessibility

Pressing Enter on a focused question toggles it

🧪 Debugging Clues (read after struggling)

You’ll want to attach one listener to .faq

Use event.target

You’ll need to walk up the DOM (closest() will be useful)

You’ll need to reason about current state vs next state