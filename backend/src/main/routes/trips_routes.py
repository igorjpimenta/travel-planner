from flask import jsonify, Blueprint, request
from src.controllers import TripCreator, TripFinder
from src.models.repositories.trips_repository import TripsRepository
from src.models.repositories.emails_to_invite_repository import (
    EmailsToInviteRepository
)
from src.models.settings.db_connection_handler import (
    db_connection_handler
)


trips_routes_bp = Blueprint("trip_routes", __name__)


@trips_routes_bp.route('/', methods=['POST'])
def create_trip():
    conn = db_connection_handler.get_connection()

    trips_repo = TripsRepository(conn)
    emails_repo = EmailsToInviteRepository(conn)
    controller = TripCreator(trips_repo, emails_repo)

    response = controller.create(request.json)

    return jsonify(response.get('body')), response.get('status_code')


@trips_routes_bp.route('/<trip_id>', methods=['GET'])
def find_trip(trip_id):
    conn = db_connection_handler.get_connection()

    trips_repo = TripsRepository(conn)
    controller = TripFinder(trips_repo)

    response = controller.find_trip_details(trip_id)

    return jsonify(response.get('body')), response.get('status_code')
