# 📘 Climb Training App — Design Document

## 1. Overview

The **Climb Training App** is a local-first mobile application designed for climbers who want structured, sustainable long-term training.

It focuses on:

* Macrocycle planning (Base → Build → Deload → Taper)
* Weekly session structure
* Session tracking and modification
* Age-aware training adjustments (later feature)
* AI insights and Garmin integration (HRV, sleep, stress) in future versions

The MVP is deliberately simple:

* No backend
* Offline-first
* Built with **React Native (Expo)** and **SQLite**

A backend (Next.js + Prisma + PostgreSQL) can be added later with minimal changes due to the clean, layered architecture.

---

## 2. Target Users

### Primary User: Adult Climber (Age 30–50+)

Characteristics:

* Limited time to train
* Needs warm-up, mobility, and injury-prevention structure
* Higher sensitivity to load (tendons, shoulders, elbows)
* Wants clear structure, not overwhelming exercise libraries
* Interested in long-term goal planning (3–6+ months)

### Secondary Users

* Intermediate climbers (6a–7c) seeking periodization
* Strength/fingerboard-focused climbers
* Climbers using mixed indoor/outdoor training

---

## 3. Core Use Cases (MVP)

### UC1 — View Macrocycle

User can:

* View a 12-week training macrocycle
* See phases: Base, Build, Deload, Taper
* Navigate between weeks

### UC2 — View Weekly Training Calendar

User sees:

* Dates mapped to training week
* Planned sessions (Climbing, Strength, Fingerboard, Run, Rest, Mobility)
* Phase indicator for the week

### UC3 — Edit a Planned Session

User can:

* Tap a day
* Modify planned session (type, description, duration)
* Add notes

### UC4 — Auto-generate calendar from macrocycle

System:

* Maps Week 1 → user-selected start date
* Generates dates for all weeks
* Fills each day using weekly templates

### UC5 — Local Data Storage

App stores:

* Macrocycle
* Planned sessions
* Session edits
* Settings (age, goals, training availability)

### UC6 — User Settings

User sets:

* Age
* Goal (ex: redpoint 8a)
* Training start date
* Available training days

---

## 4. Future Use Cases (Post-MVP)

### UC7 — AI Training Insights

AI analyzes:

* Load distribution
* Phase progression
* Age factors
* Completed sessions

Provides weekly recommendations (ex: session swap, early deload).

### UC8 — Garmin Integration

Syncs:

* HRV
* Sleep
* Stress
* Body Battery

Used for:

* Session intensity adjustments
* Readiness scoring
* Overtraining detection

### UC9 — Cloud Sync

Adds:

* User accounts
* Multi-device sync
* Long-term training history

---

## 5. Data Model (Current)

### Macrocycle JSON Structure

```json
{
  "name": "2025 Q3–Q4 Training Plan",
  "weeks": [
    { "week": 1, "phase": "Base" },
    { "week": 2, "phase": "Base" },
    { "week": 3, "phase": "Base" },
    { "week": 4, "phase": "Deload" },
    { "week": 5, "phase": "Base" },
    { "week": 6, "phase": "Base" },
    { "week": 7, "phase": "Base" },
    { "week": 8, "phase": "Deload" },
    { "week": 9, "phase": "Build" },
    { "week": 10, "phase": "Build" },
    { "week": 11, "phase": "Build" },
    { "week": 12, "phase": "Taper" }
  ]
}
```

---

## 6. Future Data Model (Planned)

### Macrocycle

* name
* startDate
* endDate
* blocks (Base/Build/Deload/Taper)

### Block

* phase
* startWeek
* endWeek

### Week

* weekNumber
* phase
* days: mapping Mon–Sun → session types

### Day

* date
* sessions

### Session

* type (Climbing, Strength, Fingerboard, Run, Rest, Mobility)
* description
* duration
* notes
* completed

This structure directly maps to a future relational schema (Prisma/PostgreSQL).

---

## 7. Architecture Overview

### MVP Architecture (Local-first)

```
React Native (Expo)
  ├── Macrocycle Screen
  ├── Week View
  ├── Session Editor
  ├── Local SQLite Database
  ├── JSON data (macrocycle, templates)
```

### Future Extended Architecture

```
Mobile App → SyncService → Backend API (Next.js)
                                  ↓
                            Prisma + PostgreSQL
                                  ↓
                          Garmin Health API
                                  ↓
                               AI Engine
```

---

## 8. Development Roadmap

### Milestone 1 — MVP (Current Focus)

* Load macrocycle from JSON
* Week view with dates
* Session editor
* Local database storage
* Settings screen

### Milestone 2 — Core Training Logic

* Weekly templates
* Warm-up/mobility blocks
* Load/intensity calculation
* Session drag-and-drop

### Milestone 3 — AI & Wearables

* AI weekly summary
* Age-aware adjustments
* HRV/sleep/stress integration

### Milestone 4 — Cloud & Premium

* User accounts
* Multi-device sync
* Training analytics dashboard

---

## 9. Design Principles

* **Local-first** for reliability and speed
* **Progressive enhancement** — backend added later
* **Climber-first** — warm-up, mobility, deloading emphasized
* **Week-centric UI** — clear & simple
* **Extendable architecture** — AI and Garmin-ready

---

## 10. Current Status

* Project created using Expo
* Macrocycle loaded from JSON
* Initial navigation implemented (Macrocycle → Week View)
* Repository initialized on GitHub
* Ready for next steps:

  1. Week → date mapping
  2. Weekly templates
  3. Session editor
  4. SQLite integration
