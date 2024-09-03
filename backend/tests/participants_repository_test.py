import uuid
from src.models.repositories import ParticipantsRepository
from src.models.settings import db_connection_handler


db_connection_handler.connect()
trip_id = str(uuid.uuid4())
participant_id = str(uuid.uuid4())
email_to_invite_id = str(uuid.uuid4())


def test_registry_participant():
    conn = db_connection_handler.get_connection()
    participants_repo = ParticipantsRepository(conn)

    participant_infos = {
        'id': participant_id,
        'trip_id': trip_id,
        'email_to_invite_id': email_to_invite_id,
        'name': 'John Doe',
    }

    participants_repo.registry_participant(participant_infos)


def test_find_participants_from_trip():
    conn = db_connection_handler.get_connection()
    participants_repo = ParticipantsRepository(conn)

    participants = participants_repo.find_participants_from_trip(trip_id)

    assert isinstance(participants, list)
    for item in participants:
        assert isinstance(item, tuple)

    print(participants)


def test_update_participant_confirmation():
    conn = db_connection_handler.get_connection()
    participants_repo = ParticipantsRepository(conn)

    participants_repo.update_participant_confirmation(participant_id)

    participants = participants_repo.find_participants_from_trip(trip_id)
    participant = next(
        (p for p in participants if p[0] == participant_id),
        None
    )

    assert participant is not None
    assert len(participant) == 4 and participant[2] == 1

    print(participant)
