import uuid
from src.models.repositories.trips_repository import TripsRepository
from src.models.settings.db_connection_handler import (
    db_connection_handler
)
from datetime import datetime, timedelta


db_connection_handler.connect()
trip_id = str(uuid.uuid4())


def test_create_trip():
    conn = db_connection_handler.get_connection()
    trips_repo = TripsRepository(conn)

    trip_infos = {
        'id': trip_id,
        'destination': 'Osasco',
        'starts_at': datetime.strptime('2024-02-01', '%Y-%m-%d'),
        'ends_at': datetime.strptime('2024-02-01', '%Y-%m-%d') +
        timedelta(days=5),
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
