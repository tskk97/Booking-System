from . import db


class BooksModel(db.Model):

    __tablename__ = "books"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=True)
    user = db.Column(db.String(100), nullable=True)
    author = db.Column(db.String(100), nullable=True)
    category = db.Column(db.String(100), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    price = db.Column(db.String(100), nullable=True)
    quantity = db.Column(db.String(100), nullable=True)
