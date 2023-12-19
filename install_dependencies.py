import subprocess

packages = [
    "python-dotenv",
    "Flask",
    "Flask-SQLAlchemy",
    "Flask-Mail",
    "Flask-Login",
    "Flask-Migrate",
    "Flask-Bcrypt"
]

for package in packages:
    subprocess.run(["pip", "install", package])

