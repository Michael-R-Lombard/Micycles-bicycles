from sqlalchemy_serializer import SerializerMixin
from config import db


class Bicycle(db.Model, SerializerMixin):
    __tablename__ = "bicycles"

    id = db.Column(db.Integer, primary_key=True)
    handlebar_size = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    frame_size = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    wheel_size = db.Column(db.Integer, db.ForeignKey("sizes.id"))
    name = db.Column(db.String)
    description = db.Column(db.String)
    image = db.Column(db.String)
    likes = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f"<Bicycles Name:{self.name}, Description:{self.description}, Image:{self.image},>"


class Size(db.Model, SerializerMixin):
    __tablename__ = "sizes"

    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String)


class WishList(db.Model, SerializerMixin):
    __tablename__ = "wishlists"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    bicycle_id = db.Column(db.Integer, db.ForeignKey("bicycles.id"))


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    email = db.Column(db.String)

    def __repr__(self):
        return f"<User {self.id}>"
