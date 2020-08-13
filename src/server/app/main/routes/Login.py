from . import login
from flask import request
import json
from ..services.login import userLogin


@login.route('/', methods=["POST"])
def user_login_password():

    flag_request, token, user_data = userLogin(request.json)

    if flag_request:
        return {'status': True, 'msg': "Login Successful", 'token': str(token), 'user_data': user_data}
    else:
        return {'status': False, 'msg': "Incorrect Credentials"}
