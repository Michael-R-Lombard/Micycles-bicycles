from flask import Flask, jsonify, make_response, request, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Bicycle, User, WishList
from config import app
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.secret_key = "1234"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)


@app.route("/")
def index():
    return "<h1>Phase 5 Project Server</h1>"


class Bicycles(Resource):
    def get(self):
        bicycle_list = [bicycle.to_dict() for bicycle in Bicycle.query.all()]
        response = make_response(jsonify(bicycle_list), 200)
        return response

    def post(self):
        new_bicycle = Bicycle()
        data = request.get_json()

        try:
            for attr in data:
                setattr(new_bicycle, attr, data[attr])

            db.session.add(new_bicycle)
            db.session.commit()

            return make_response(new_bicycle.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["Validation errors"]}, 400)


api.add_resource(Bicycles, "/bicycles")


class BicycleByID(Resource):
    def get(self, id):
        bicycle = Bicycle.query.filter(Bicycle.id == id).first().to_dict()
        response = make_response(bicycle, 200)

        return response

    def delete(self, id):
        bicycle = Bicycle.query.filter_by(id=id).first()

        db.session.delete(bicycle)
        db.session.commit()

        response = make_response("", 204)

        return response

    def patch(self, id):
        bicycle = Bicycle.query.filter_by(id=id).first()
        data = request.get_json()

        try:
            for attr in data:
                setattr(bicycle, attr, data[attr])

            db.session.add(bicycle)
            db.session.commit()

            return make_response(bicycle.to_dict(), 200)
        except ValueError:
            return make_response({"errors": ["Validation errors"]}, 400)


api.add_resource(BicycleByID, "/bicycles/<int:id>")


class Login(Resource):
    def post(self):
        username = request.get_json()["username"]
        password = request.get_json()["password"]
        user = User.query.filter(User.username == username).first()

        if password == user.password:
            return user.to_dict(), 200

        return {"error": "Invalid username or password"}, 401


api.add_resource(Login, "/login")


class Users(Resource):
    def get(self):
        new_user_list = [new_user.to_dict() for new_user in User.query.all()]
        return make_response(new_user_list, 200)

    def post(self):
        new_user = User()
        data = request.get_json()

        try:
            for attr in data:
                setattr(new_user, attr, data[attr])
            db.session.add(new_user)
            db.session.commit()

            session["user_id"] = new_user.id

            return make_response(new_user.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Users, "/create_user")


class WishLists(Resource):
    def post(self):
        new_wish_list = WishList()
        data = request.get_json()

        try:
            for attr in data:
                setattr(new_wish_list, attr, data[attr])

            db.session.add(new_wish_list)
            db.session.commit()

            return make_response(new_wish_list.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["Validation errors"]}, 400)


api.add_resource(WishLists, "/wish_list")


class WishListByUserId(Resource):
    def get(self, user_id):
        all_wish_lists = [item.to_dict() for item in WishList.query.all()]
        user_wish_list = []

        for item in all_wish_lists:
            if item["user_id"] == user_id:
                user_wish_list.append(item)

        response = make_response(jsonify(user_wish_list), 200)
        return response


api.add_resource(WishListByUserId, "/wish_list/<int:user_id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
