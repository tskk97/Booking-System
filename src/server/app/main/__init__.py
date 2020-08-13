from flask import Flask
from flask_cors import CORS
from config import app_config
from .models import db
from flask_migrate import Migrate

from .routes import register as register_blueprint
from .routes import login as login_blueprint
from .routes import dashboard as dashboard_blueprint


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    app.config.from_object(app_config[config_name])
    app.config.from_pyfile("config.py")

    app.register_blueprint(register_blueprint, url_prefix="/register")
    app.register_blueprint(login_blueprint, url_prefix="/login")
    app.register_blueprint(dashboard_blueprint, url_prefix="/dashboard")


    db.init_app(app)
    migrate = Migrate(app, db)

    return app
