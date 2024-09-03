import uuid
from src.models.repositories import ActivitiesRepository
from src.models.settings import db_connection_handler


db_connection_handler.connect()
trip_id = str(uuid.uuid4())
activity_id = str(uuid.uuid4())
email_to_invite_id = str(uuid.uuid4())


def test_registry_activity():
    conn = db_connection_handler.get_connection()
    activities_repo = ActivitiesRepository(conn)

    activity_infos = {
        'id': activity_id,
        'trip_id': trip_id,
        'title': 'Restaurant',
        'occurs_at': '2024-08-08',
    }

    activities_repo.registry_activity(activity_infos)


def test_find_activities_from_trip():
    conn = db_connection_handler.get_connection()
    activities_repo = ActivitiesRepository(conn)

    activities = activities_repo.find_activities_from_trip(trip_id)

    assert isinstance(activities, list)
    for item in activities:
        assert isinstance(item, tuple)

    print(activities)
