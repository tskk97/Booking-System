""" import all the models in the folder here"""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from app.main.models.UsersModel import UsersModel
