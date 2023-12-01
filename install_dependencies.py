import subprocess

packages = [
    "python-dotenv",
    "Flask",
    "Flask-SQLAlchemy",
    "Flask-Mail",
    "Flask-Login",
    "Flask-Migrate"
]

for package in packages:
    subprocess.run(["pip", "install", package])

