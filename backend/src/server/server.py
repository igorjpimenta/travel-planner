from flask import Flask
from src.main.routes import trips_routes_bp, trip_links_routes_bp


app = Flask(__name__)

app.register_blueprint(
    blueprint=trips_routes_bp,
    url_prefix='/trips'
)
app.register_blueprint(
    blueprint=trip_links_routes_bp,
    url_prefix='/trips/<trip_id>/links'
)
