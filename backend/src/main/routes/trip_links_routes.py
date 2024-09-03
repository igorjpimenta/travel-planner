from flask import jsonify, Blueprint, request
from src.controllers import LinkCreator, LinkFinder
from src.models.repositories import (
    LinksRepository,
)
from src.models.settings.db_connection_handler import (
    db_connection_handler
)


trip_links_routes_bp = Blueprint("trip_links_routes", __name__)


@trip_links_routes_bp.route('/', methods=['POST'])
def registry_trip_link(trip_id):
    conn = db_connection_handler.get_connection()

    links_repo = LinksRepository(conn)
    controller = LinkCreator(links_repo)

    response = controller.create(request.json, trip_id)

    return jsonify(response.get('body')), response.get('status_code')


@trip_links_routes_bp.route('/', methods=['GET'])
def find_trip_links(trip_id):
    conn = db_connection_handler.get_connection()

    links_repo = LinksRepository(conn)
    controller = LinkFinder(links_repo)

    response = controller.find(trip_id)

    return jsonify(response.get('body')), response.get('status_code')
