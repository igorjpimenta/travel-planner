import uuid
from src.models.repositories import LinksRepository
from src.models.settings import db_connection_handler


db_connection_handler.connect()
trip_id = str(uuid.uuid4())


def test_registry_link():
    conn = db_connection_handler.get_connection()
    links_repo = LinksRepository(conn)

    link_infos = {
        'id': str(uuid.uuid4()),
        'trip_id': trip_id,
        'title': 'Example',
        'url': 'example.com',
    }

    links_repo.registry_link(link_infos)


def test_find_links_from_trip():
    conn = db_connection_handler.get_connection()
    links_repo = LinksRepository(conn)

    links = links_repo.find_links_from_trip(trip_id)

    assert isinstance(links, list)
    for item in links:
        assert isinstance(item, tuple)

    print(links)
