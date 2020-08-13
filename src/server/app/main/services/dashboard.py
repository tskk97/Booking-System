import math
from app.main.models.BooksModel import BooksModel, db
from app.main.util.save_db import save_db


def addNewBooks(data):
    new_book = BooksModel(
        title=data['title'],
        user=data['user'],
        author=data['author'],
        category=data['category'],
        price=data['price'],
        quantity=data['quantity']
    )

    save_db(new_book)
    return True


def getMyBooks(name, page, per_page):
    query = 'select * from books where user = "%s";' % (name) 
       
    data_raw = db.session.execute(query)
    data = [dict(row) for row in data_raw]
    
    total = len(data)
    total_pages = math.ceil(total/per_page)

    prev_page_end = (int(page) - 1) * per_page
    curr_page_end = int(page) * per_page

    new_data = data[prev_page_end:curr_page_end]

    return True, data, total, page, per_page, total_pages


def getAllBooks(page, per_page):
    query = 'select * from books;'

    print("page:", page)
       
    data_raw = db.session.execute(query)
    data = [dict(row) for row in data_raw]
    
    total = len(data)
    total_pages = math.ceil(total/per_page)

    prev_page_end = (int(page) - 1) * per_page
    curr_page_end = int(page) * per_page

    new_data = data[prev_page_end:curr_page_end]

    return True, data, total, page, per_page, total_pages
    