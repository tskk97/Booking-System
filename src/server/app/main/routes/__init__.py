from flask import Blueprint

register = Blueprint('register',__name__)
login = Blueprint('login',__name__)
dashboard = Blueprint('dashboard', __name__)

from . import Register, Login, Dashboard
