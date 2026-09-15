# 🔢 Number Guessing Game

A classic game with a modern, polished twist! 🎯

Instead of just building a simple guessing game once, I challenged myself to build this exact same interactive experience using **two different frontend frameworks**: **Vue 3** and **React**. 

Why? Because mastering frontend development isn't just about making the logic work; it's about deeply understanding how different ecosystems handle state management, reactivity, and immutable data updates under the hood.

---

### 🚀 Live Demos

Experience the smooth UI, animations, and game logic live. Both versions share the exact same design language and features, but are powered by different engines:

| Framework | Live Preview | |
| :--- | :--- | :--- |
| ⚡ **Vue 3** (Composition API) | [🔗 View Vue Live Demo](https://number-guessing-game-vue.vercel.app) |
| ⚛️ **React** (Hooks) | [🔗 View React Live Demo](https://number-guessing-game-react-bice.vercel.app) |

---

### ✨ What Makes It Special? (The Details)

It’s not just a basic `Math.random()` script. I focused on building a complete, production-ready user experience:
- **Smart Validation:** Prevents invalid inputs (empty, non-numeric, or out-of-range) with clear, user-friendly alerts.
- **Guess History Tracking:** Keeps a real-time log of all previous guesses, helping users strategize their next move.
- **Win State Management:** Automatically disables the input and guess button upon winning, preventing further guesses, and reveals a "Play Again" button to reset the game with a new random number.
- **Premium UI/UX:** Styled with **Tailwind CSS**, featuring a beautiful dark gradient background, smooth transitions, and a fully responsive layout that looks great on mobile and desktop.

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Key Concepts:** `ref()` for reactive state, `v-model.number` for two-way binding, and direct array mutation (`push`).
- **Styling:** Tailwind CSS

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Concepts:** `useState` with lazy initialization, Controlled Components (`value` + `onChange`), and immutable state updates (`setGuessed(prev => [...prev, number])`).
- **Styling:** Tailwind CSS

**Shared:**
- ⚙️ **Vite** (Blazing fast build tool and dev server)

---
