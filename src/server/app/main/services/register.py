from app.main.models.UsersModel import UsersModel, db
from app.main.util.save_db import save_db


def userRegister(data):
    user = UsersModel().query.filter(UsersModel.email == data['email']).all()

    if len(user) == 0:

        new_user = UsersModel(
            name=data['name'],
            email=data['email'],
            username=data['username'],
            password=data['password'],
            user_type=data['user_type']
        )

        save_db(new_user)
        return True, "Registration Successful"
    else:
        return False, data['email'] + " is already registered"
