from flask import jsonify, Blueprint, request
from src.controllers import ParticipantCreator, ParticipantFinder
from src.models.repositories import (
    ParticipantsRepository,
    EmailsToInviteRepository,
    TripsRepository
)
from src.models.settings import db_connection_handler


trip_participants_routes_bp = Blueprint("trip_participants_routes", __name__)


@trip_participants_routes_bp.route('/', methods=['POST'])
def invite_participant_to_trip(trip_id):
    conn = db_connection_handler.get_connection()

    participants_repo = ParticipantsRepository(conn)
    emails_to_invite_repo = EmailsToInviteRepository(conn)
    trips_repo = TripsRepository(conn)
    controller = ParticipantCreator(
        participants_repo,
        emails_to_invite_repo,
        trips_repo
    )

    response = controller.create(request.json, trip_id)

    return jsonify(response.get('body')), response.get('status_code')
