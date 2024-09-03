import uuid
from src.models.repositories import TripsRepository
from src.models.settings import db_connection_handler
from datetime import datetime, timedelta


db_connection_handler.connect()
trip_id = str(uuid.uuid4())
starts_at = datetime.strptime('2024-02-01', '%Y-%m-%d')
ends_at = starts_at + timedelta(days=5)


def test_create_trip():
    conn = db_connection_handler.get_connection()
    trips_repo = TripsRepository(conn)

    trip_infos = {
        'id': trip_id,
        'destination': 'Osasco',
        'starts_at': starts_at,
        'ends_at': ends_at,
        'owner_name': 'Osvaldo',
        'owner_email': 'osvaldo@examples.com'
    }

    trips_repo.create_trip(trip_infos)


def test_find_trip_by_id():
    conn = db_connection_handler.get_connection()
    trips_repo = TripsRepository(conn)

    trip = trips_repo.find_trip_by_id(trip_id)

    assert isinstance(trip, tuple)

    print(trip)


def test_update_trip_status():
    conn = db_connection_handler.get_connection()
    trips_repo = TripsRepository(conn)

    trips_repo.update_trip_status(trip_id)

    trip = trips_repo.find_trip_by_id(trip_id)

    assert trip is not None
    assert len(trip) == 7 and trip[6] == 1

    print(trip)
