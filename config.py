# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    MAIL_SERVER = os.getenv('MAIL_SERVER')
    MAIL_PORT = int(os.getenv('MAIL_PORT'))
    MAIL_USE_TLS = os.getenv('MAIL_USE_TLS').lower() == 'true'
    MAIL_USE_SSL = os.getenv('MAIL_USE_SSL').lower() == 'true'
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.getenv('MAIL_DEFAULT_SENDER')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI')
    UPLOAD_FOLDER = 'static/images/products'
    ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png', 'gif'}
