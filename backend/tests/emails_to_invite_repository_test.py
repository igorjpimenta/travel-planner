import uuid
from src.models.repositories import EmailsToInviteRepository
from src.models.settings import db_connection_handler


db_connection_handler.connect()
trip_id = str(uuid.uuid4())


def test_registry_email():
    conn = db_connection_handler.get_connection()
    emails_to_invite_repo = EmailsToInviteRepository(conn)

    email_infos = {
        'id': str(uuid.uuid4()),
        'trip_id': trip_id,
        'email': 'hello_world@example.com',
    }

    emails_to_invite_repo.registry_email(email_infos)


def test_find_emails_from_trip():
    conn = db_connection_handler.get_connection()
    emails_to_invite_repo = EmailsToInviteRepository(conn)

    emails = emails_to_invite_repo.find_emails_from_trip(trip_id)

    assert isinstance(emails, list)
    for item in emails:
        assert isinstance(item, tuple)

    print(emails)
