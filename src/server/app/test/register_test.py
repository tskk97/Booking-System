import unittest
from ..main.services.user import register as user_register


class RegisterTest(unittest.TestCase):
    """
    Testing for registeration of the user
    """
    def test_register_success(self):

        obj = {
            "firstname": "A",
            "lastname": "B",
            "email": "abc@gmail.com",
            "password": "A"
        }

        self.assertTrue(user_register(obj))

    def test_register_error(self):

        obj = {
            "password": "hi"
        }

        self.assertTrue(user_register(obj))

    def test_register_empty(self):

        obj = {
            "firstname": "A",
            "lastname": "",
            "email": "abc@gmail.com",
            "password": "A"
        }

        self.assertTrue(user_register(obj))

    def test_register_type(self):

        obj = {
            "firstname": "A",
            "lastname": "",
            "email": 123,
            "password": 123
        }

        self.assertTrue(user_register(obj))
    
    def test_register_empty(self):

        data = {
            "name": "",
            "username": "",
            "password": "",
            "phone": "",
            "role": ""
        }
        self.assertTrue(user_register(data))

    def test_register_datatype(self):

        data = {
            "name": "Saikiran",
            "username": "saikiran@gmail.com",
            "password": 1111,
            "phone": 9289436435,
            "role": 'user'
        }
        self.assertTrue(user_register(data))

    def test_register_input(self):
        self.assertTrue(user_register(0))
        self.assertTrue(user_register(""))
        self.assertTrue(user_register([]))
        self.assertTrue(user_register({}))

    def test_register_one_missing(self):

        data = {
            "username": "",
        }
        self.assertTrue(user_register(data))
    
