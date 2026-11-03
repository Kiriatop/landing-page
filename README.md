# 🚀 Landing Page Website

A lightweight, high-performance landing page website built with Django, designed to present and promote business ideas and digital projects effectively.

---

## 🛠️ Tech Stack

* **Backend:** Python, Django
* **Frontend:** HTML5, CSS3, JavaScript
* **Production / Deployment:** Uvicorn, Nginx, systemd, Let's Encrypt (HTTPS)
* **Database:** SQLite (default/lightweight)
* **Configuration:** `python-dotenv` for managing sensitive environment variables

---

## ✨ Features

* **Lightweight & Fast:** Optimized asset loading and clean dependency management for low resource consumption.
* **Fully Responsive:** Seamless layout adaptation for mobile, tablet, and desktop viewports.
* **Production-Ready Security:** Secure handling of secrets via `.env` integration and strict production settings.

---

## ⚙️ Local Development Setup

Follow these steps to get a local development environment up and running:

### 1. Clone the Repository
```bash
git clone https://github.com/Kiriatop/landing-page.git
cd landing-page
```

### 2. Create and Activate a Virtual Environment
* **Linux / macOS:**
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```
* **Windows:**
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Set Up Environment Variables
Create a `.env` file in the root directory of the project and define your configuration:
```env
DEBUG=True
SECRET_KEY=your-local-secret-key
ALLOWED_HOSTS=127.0.0.1,localhost
```

### 5. Run Database Migrations & Start Server
```bash
python manage.py migrate
python manage.py runserver
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to view the application.

---

## 🚀 Production Deployment Overview

This application is designed to run efficiently on a Linux VPS (1 GB RAM recommended):
* **ASGI Server:** Uvicorn managed via `systemd` services.
* **Reverse Proxy:** Nginx handling static files and request routing.
* **SSL/TLS:** Free certificate management via Certbot.

---

## 📄 License

This project is licensed under the Apache License 2.0.
