from . import dashboard
from flask import Flask, request
import json
from ..models import db
from ..services.dashboard import addNewBooks, getMyBooks, getAllBooks


@dashboard.route('/', methods=["GET"])
def dashboard_home():
    return "Dashboard Home"


@dashboard.route('/addNewBook', methods=["POST"])
def add_books():
    flag_request = addNewBooks(request.json)

    if flag_request:
        return {'status': True, 'msg': "New Book added Successfully"}
    else:
        return {'status': False, 'msg': "Unsuccessful"}


@dashboard.route('/viewMyBooks', methods=["GET"])
def get_my_books():
    name = request.json["name"]
    page = request.json["page"]
    per_page = 10

    flag_request, data, total, new_page, new_per_page, total_pages = getMyBooks(name, page, per_page)

    if flag_request:
        return {'status': True, 'msg': "Successful", 'data': data, 'total': total, 'page': new_page, 'per_page': new_per_page, 'total_pages': total_pages}
    else:
        return {'status': False, 'msg': "Unsuccessful"}


@dashboard.route('/viewAllBooks', methods=["GET"])
def get_all_books():
    page = request.json["page"]
    per_page = 10

    flag_request, data, total, new_page, new_per_page, total_pages = getAllBooks(page, per_page)

    if flag_request:
        return {'status': True, 'msg': "Successful", 'data': data, 'total': total, 'page': new_page, 'per_page': new_per_page, 'total_pages': total_pages}
    else:
        return {'status': False, 'msg': "Unsuccessful"}