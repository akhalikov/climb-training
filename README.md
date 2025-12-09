# 🧗‍♂️ Climb Training App

A **local-first climbing training planner** designed for structured long-term progression, especially for adult climbers (30–50+).  
Built with **React Native + Expo**, the app focuses on sustainable training cycles, clear weekly planning, and future integration with Garmin and AI insights.

---

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Screens & Workflow](#screens--workflow)
- [Documentation](#documentation)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [License](#license)

---

## 🧭 Project Overview

The Climb Training App helps climbers plan and perform structured training by providing:

- **Macrocycle planning** (Base → Build → Deload → Taper)
- **Weekly training calendars**
- **Session editing and tracking**
- **Warm-up and mobility emphasis**
- **Future AI insights & Garmin recovery integration**

The goal is to provide the clarity and structure needed by climbers who cannot simply “just climb more” — especially climbers balancing work, age-related recovery factors, and injury prevention.

---

## ⭐ Features

### ✔ MVP Features (in development)
- View a 12-week macrocycle with phases  
- Weekly training calendar view  
- Session editor (type, description, notes)  
- Local data storage (SQLite)  
- Age- and goal-based user settings  
- Local-first architecture (offline support)

### 🔧 Upcoming (Short Term)
- Weekly templates  
- Load/intensity calculation  
- Better session types (Climbing, Strength, Fingerboard, Mobility, etc.)  
- Warm-up/mobility blocks  
- Drag & drop session rescheduling

### 🔮 Future Enhancements
- AI weekly insights & auto-regulated training  
- Garmin HRV/sleep/stress integration  
- Cloud sync (Next.js + Prisma backend)  
- Performance tracking dashboards  
- Multi-device support

---

## 🖥 Screens & Workflow

The app currently includes:

1. **Macrocycle Screen** – list of weeks & phases  
2. **Week View** – high-level calendar layout for each week  
3. **Session Editor** – modify daily training sessions  
4. **Settings Screen** – configure age, goals, and start date  

All data is stored locally in SQLite and designed to sync with a backend in future versions.

---

## 📘 Documentation

Full design documentation is located in the repository:

- **Design Document**  
  👉 [`docs/design.md`](./docs/design.md)

A detailed roadmap is available here:

- **Roadmap**  
  👉 [`docs/roadmap.md`](./docs/roadmap.md)  

More docs coming soon:
- Architecture  
- Data Model

---

## 🛠 Tech Stack

- **React Native (Expo)**
- **TypeScript**
- **Expo Router**
- **SQLite (expo-sqlite)**
- **Zustand** for lightweight state management
- JSON-based macrocycle configuration  
- Future backend-ready architecture using:
  - Next.js  
  - Prisma  
  - PostgreSQL  

---

## 🚀 Getting Started

> 💡 This project uses Expo. Make sure you have Node.js installed.

### 1. Clone the repository
```sh
git clone https://github.com/akhalikov/climb-training.git
cd climb-training
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npx expo start
```

### 4. Run on your device

- Press a for Android emulator
- Press i for iOS simulator (macOS only)
- Scan QR code using Expo Go app