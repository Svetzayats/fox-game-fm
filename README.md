This GitHub repository showcases a JavaScript game I developed as part of a [course on Frontend Masters](https://frontendmasters.com/courses/front-end-game/). The project served as a platform for both game creation and exploring software development practices. 

### Project Overview
It is game like a tamagochi with fox. 

### Key Learning Points From Course 
- Parcel as a build tool: I used Parcel for the first time, and I can say that its straightforward, zero-configuration setup made it an invaluable tool, greatly simplifying the build process.
- Work on Code Style and Formatting setup (ESLint, Prettier)
- State Machine Approach: I really like finite state machine, and in this course we use it to manage the game's state. This approach contributed to cleaner and more organized code.

### After course improvements and thoughts 
- I've set up GitHub Actions for deploying the game and hosting it on GitHub Pages. 
- Tests are running after push in repository (main branch) with Github Action. 


### Future Enhancements and Tasks
[x] Telegram Notifications for Test Failures: Implemented notifications to Telegram for any test failures following a push.

[ ] Enhanced Testing for Button Cycling: Plan to add tests focusing on the button cycling functionality.

[ ] GameState Testing: Aim to introduce tests specific to different game states.

[ ] GameState Refactoring: There's a plan to refactor the game state management for improved efficiency.

[ ]  Exclude Certain Files from Test Coverage: Setup configurations to exclude files like constants.js from the test coverage reports.

[ ]  Further Refactor with GameState: Additional refactoring is planned, focusing on optimizing the game state management.

[ ]  Transition to TypeScript: I intend to refactor the codebase to TypeScript, aiming for better code reliability and developer experience.
