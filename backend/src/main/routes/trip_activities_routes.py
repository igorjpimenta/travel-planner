from flask import jsonify, Blueprint, request
from src.controllers import ActivityCreator, ActivityFinder
from src.models.repositories import (
    ActivitiesRepository,
    TripsRepository,
)
from src.models.settings import db_connection_handler


trip_activities_routes_bp = Blueprint("trip_activities_routes", __name__)


@trip_activities_routes_bp.route('/', methods=['POST'])
def registry_trip_activity(trip_id):
    conn = db_connection_handler.get_connection()

    activities_repo = ActivitiesRepository(conn)
    trips_repo = TripsRepository(conn)
    controller = ActivityCreator(
        activities_repo,
        trips_repo,
    )

    response = controller.create(request.json, trip_id)

    return jsonify(response.get('body')), response.get('status_code')


@trip_activities_routes_bp.route('/', methods=['GET'])
def find_trip_activities(trip_id):
    conn = db_connection_handler.get_connection()

    activities_repo = ActivitiesRepository(conn)
    trips_repo = TripsRepository(conn)
    controller = ActivityFinder(activities_repo, trips_repo)

    response = controller.find(trip_id)

    return jsonify(response.get('body')), response.get('status_code')
