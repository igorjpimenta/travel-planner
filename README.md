# Travel Planner Application

![License](https://img.shields.io/github/license/igorjpimenta/travel-planner)
![Contributors](https://img.shields.io/github/contributors/igorjpimenta/travel-planner)
![Issues](https://img.shields.io/github/issues/igorjpimenta/travel-planner)
![Forks](https://img.shields.io/github/forks/igorjpimenta/travel-planner)
![Stars](https://img.shields.io/github/stars/igorjpimenta/travel-planner)

## Overview

**Travel Planner** is an application designed to help you plan trips with your friends. You can invite friends via email to join your journey, allowing everyone to collaborate on planning the trip, adding helpful links, setting activities, and confirming their presence.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Features

- **Trip Planning**: Organize trips, add activities, and manage your itinerary.
- **Invite Friends**: Invite friends via email to collaborate on planning the trip.
- **Activity Management**: Set activities and allow friends to join and contribute ideas.
- **Helpful Links**: Add links related to the trip, such as destinations, accommodations, and more.
- **Confirmation of Presence**: Friends can confirm their participation and help with the planning.

## Tech Stack

- **Backend**: Python (Flask)
- **Database**: SQLite (managed using Alembic)
- **Email Integration**: For sending important notifications

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Python](https://www.python.org/downloads/)

### Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/igorjpimenta/travel-planner.git
   cd travel-planner
    ```

2. **Set the environment variables**:
    ```bash
    echo 'SMTP_SERVER="your-smtp-server"
    SMTP_PORT=587
    SMTP_FROM_ADDR="your-smtp-address"
    SMTP_LOGIN="your-smtp-login"
    SMTP_PASS="your-smtp-password"' > .env

3. **Create and activate a virtual environment**:
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install backend dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Initialize the database**:
    ```bash
    touch ../storage.db # On Windows: $null > ../storage.db
    ```

5. **Run database migrations**:
    ```bash
    alembic upgrade head
    ```

### Running the Application

1. **Run the backend server**:
    ```bash
    cd backend
    python run.py
    ```
    The backend server will start on `http://localhost:3000`.

## Contributing
We welcome contributions from the community! Here's how you can get involved:

1. Fork the repository: Click the "Fork" button at the top right of this page.

2. Clone your fork:
    ```bash
    git clone https://github.com/yourusername/travel-planner.git
    ```

3. Create a branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```

4. Make your changes: Write clear, concise commit messages.

5. Push to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```

6. Submit a pull request: Describe your changes in the PR and link any relevant issues.

### Contribution Guidelines
- Follow the existing code style.
- Write tests for new features or bug fixes.
- Keep your pull requests small and focused on a single issue or feature.
- Provide clear documentation for new features.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Inspired by an event from Rocketseat, the main backend repo is available [here](https://github.com/rocketseat-education/nlw-journey-python).

## Contact
May you have questions or suggestions, feel free to open an issue or contact the project maintainers.