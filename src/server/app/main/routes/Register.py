from . import register
from flask import Flask, request
from ..models import db
from app.main.services.register import userRegister


@register.route("/", methods=["POST"])
def user_register():

    flag_register_request, msg = userRegister(request.json)
    
    if flag_register_request:
        return {'status': True, 'msg': msg}
    else:
        return {'status': False, 'msg': msg}
