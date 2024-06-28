# Project Management Tool

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd ProjectManagement
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations:
    ```bash
    python manage.py migrate
    ```

5. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

6. Run the development server:
    ```bash
    python manage.py runserver
    ```

7. Access the application at `http://127.0.0.1:8000/`.

## Features

- Create and manage projects
- Add and update tasks within a project
- Assign tasks to users
- Track the progress of tasks with status updates
- User authentication and permissions
