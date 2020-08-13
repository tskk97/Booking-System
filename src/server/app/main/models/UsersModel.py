from . import db


class UsersModel(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=True)
    username = db.Column(db.String(100), nullable=True)
    password = db.Column(db.String(100), nullable=True)
    user_type = db.Column(db.String(100), nullable=True)
