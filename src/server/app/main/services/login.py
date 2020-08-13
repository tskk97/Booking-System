from app.main.models.UsersModel import UsersModel
from instance.config import SECRET_KEY
import datetime
import jwt


def userLogin(data):
    user = UsersModel().query.filter(UsersModel.email == data['email'] and UsersModel.password == data['password']).first()

    if user != None:

        user_data = []
        temp = {}

        temp["id"] = user.id
        temp["name"] = user.name
        temp["email"] = user.email
        temp["username"] = user.username
        temp["user_type"] = user.user_type

        user_data.append(temp)
        
        token_data = {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "username": user.username,
            "user_type": user.user_type,
            "expire": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
        }
        token = jwt.encode(token_data, SECRET_KEY)
        return True, token, user_data
    else:
        return False, "", ""
