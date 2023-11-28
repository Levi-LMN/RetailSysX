import sqlalchemy
from flask import Flask
from flask_migrate import Migrate
from flask.cli import FlaskGroup
from app import app, db  # Replace 'your_app' with the actual name of your Flask application instance

migrate = Migrate(app, db)
cli = FlaskGroup(app)

if __name__ == '__main__':
    cli()

