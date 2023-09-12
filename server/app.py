from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Bicycle, User 
# from config import app 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

@app.route('/')
def index():
    return '<h1>Phase 5 Project Server</h1>'

class Bicycles(Resource):
    def get(self):
        bicycle_list = [bicycle.to_dict() for bicycle in Bicycle.query.all()]  

        response = make_response(
            jsonify(bicycle_list),
            200
        )
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
            return make_response({'errors': ['Validation errors']}, 400)

api.add_resource(Bicycles, '/bicycles')
   
        





class BicycleByID(Resource):
    def get(self, id):
        bicycle = Bicycle.query.filter(Bicycle.id == id).first().to_dict()
        response = make_response(
            bicycle,
            200
        )

        return response
    
    def delete(self, id):
        bicycle = Bicycle.query.filter_by(id=id).first()
        
        db.session.delete(bicycle)
        db.session.commit()

        response = make_response('', 204)
        
        return response

api.add_resource(BicycleByID, '/bicycles/<int:id>')

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)
    
api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
