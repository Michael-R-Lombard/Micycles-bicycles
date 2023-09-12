from flask import Flask, jsonify, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Bicycle 
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
    
api.add_resource(Bicycles, '/bicycles')
    # def post(self):
    #     request_json = request.get_json()
       
    #     new_production = Production(
    #         title=request_json['title'],
    #         genre=request_json['genre'],
    #         budget=request_json['budget'],
    #         image=request_json['image'],
    #         director=request_json['director'],
    #         description=request_json['description'],
    #         ongoing=request_json['ongoing']
    #     )
    #     db.session.add(new_production)
    #     db.session.commit()

    #     #new_production.to_dict()
    #     response = make_response(
    #         new_production.to_dict(),
    #         201
    #     )
    #     return response
        



# class Parts(Resource):
#     def get(self):
#         part_list = [part.to_dict() for part in Part.query.all()]  

#         response = make_response(
#             jsonify(part_list),
#             200
#         )
#         return response

class BicycleByID(Resource):
    def get(self, id):
        bicycle = Bicycle.query.filter(Bicycle.id == id).first().to_dict()
        response = make_response(
            bicycle,
            200
        )

        return response

api.add_resource(BicycleByID, '/bicycles/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
