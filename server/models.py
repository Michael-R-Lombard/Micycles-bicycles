from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from config import db

# db=SQLAlchemy()

# Models go here!

# class BicyclePartsAssociation(db.Model, SerializerMixin):
#     __tablename__ = 'bicycle_parts'

#     id = db.Column(db.Integer, primary_key=True)
#     bicycle_id = db.Column(db.Integer, db.ForeignKey("bicycles.id"))
#     part_id = db.Column(db.Integer, db.ForeignKey("parts.id"))

#     serialize_rules = ('-bicycle.bicycle_part_associations', '-part.bicycle_part_associations',)

# class UserBicyclesAssociation(db.Model, SerializerMixin):
#     __tablename__ = 'user_bicycles'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
#     bicycle_id = db.Column(db.Integer, db.ForeignKey("bicycles.id"))

#     serialize_rules = ('-user.user_bicycles', '-bicycle.user_bicycles',)
    

    # created_at = db.Column(db.DateTime, server_default=db.func.now())
    # updated_at = db.Column(db.DateTime, onupdate=db.func.now()) 

    # bicycle_part_associations = db.relationship("BicyclePartsAssociation", cascade= "all, delete", backref="bicycle")
    # user_bicycles = db.relationship("UserBicyclesAssociation", backref="bicycle")
    
    # serialize_rules = ("-users.bicycle","-user_bicycles.bicycle", "bicycle_part_associations.bicycle" )




    # def __repr__(self):
    #     return f'<User {self.id}>'


class Bicycle(db.Model, SerializerMixin):
    __tablename__ = 'bicycles'

    id = db.Column(db.Integer, primary_key=True)
    handlebar_size = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    frame_size = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    wheel_size = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    name =db.Column(db.String)
    description = db.Column(db.String)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<Bicycles Name:{self.name}, Description:{self.description}, Image:{self.image},>'
    
class Size(db.Model, SerializerMixin):
    __tablename__ = 'sizes'

    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String)

class WishList(db.Model, SerializerMixin):
    __tablename__ = 'wishlists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    bicycle_id = db.Column(db.Integer, db.ForeignKey("bicycles.id"))
    
    # class Part(db.model, SerializerMixin):
    #     __tablename__ = 'parts'
    #     id = db.Column(db.Integer, primary_key=True)
    #     # name = db.Column(db.String)
    #     frame = db.Column(db.string)
    #     handlebars = db.Column(db.String)
    #     wheels = db.Column(db.String)

    #     bicycle_id = db.Column(db.Integer, db.ForeignKey('bicycles.id'))

    #     serialize_rules = ("-bicycle.part")

    # def __repr__(self):
    #     return f'<Bicycle Name:{self.name}, Handlebars:{self.handlebars}, wheels:{self.wheels},>'

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    # display_name = db.Column(db.String)
    username = db.Column(db.String)
    password = db.Column(db.String)
  
