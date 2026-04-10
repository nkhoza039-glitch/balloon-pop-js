Skybound Balloon Pop
A high-energy, responsive web game developed as part of my Web Design and Development journey. This project focuses on DOM manipulation, persistent browser storage, and an intuitive UI/UX.

View Live Demo: https://luxury-longma-5d3510-ballon-game.netlify.app/

Overview
Skybound Balloon Pop is a browser-based game where players test their reflexes by popping balloons against a 30-second timer. The project was designed to solve common web development challenges, such as managing game states (Start, Play, End) and ensuring data persists even after the user leaves the page.

Technical Features
Persistent Leaderboard: Implemented LocalStorage to store and retrieve player scores. The "All-Time Best" list automatically sorts and displays the top five performers.

Responsive Game Logic:

Dynamic Spawning: Balloons are generated at random horizontal coordinates using Math.random().

Variable Difficulty: CSS @keyframes and dynamic animationDuration ensure every balloon moves at a unique speed.

Optimized Input: Used mousedown event listeners instead of standard click events to reduce input lag, ensuring a more "snappy" feel on both desktop and mobile.

State Management: Clean transitions between the Start Screen, Active Gameplay, and Game Over screen without page reloads.

UI/UX Design
Instructional Modal: Built a custom pop-up instructions window that includes a video tutorial.

Minimize Feature: To enhance user experience, I added a "Minimize" toggle to the modal, allowing users to keep the instructions visible in a small corner without obstructing the gameplay area.

Mobile-First Approach: Used CSS Media Queries to ensure the game container, font sizes, and buttons are perfectly scaled for mobile devices.

Theme: A modern "Sky" aesthetic utilizing a sophisticated dark transparency (rgba) and a gold accent color (#cea813) for high-contrast visibility. Tech Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)

Tools: Visual Studio Code, Figma (UI Planning), Netlify (Deployment)

Installation
To run this project locally:

Clone the repository:

Bash
git clone https://github.com/YOUR_USERNAME/balloon-pop-game.git
Navigate to the folder:

Bash
cd balloon-pop-game
Launch the game:
Open index.html in your preferred browser.
