import uuid
from src.utils.types import ResponseType


class TripCreator:
    def __init__(self, trips_repository, emails_repository) -> None:
        self.__trips_repository = trips_repository
        self.__emails_repository = emails_repository

    def create(self, body) -> ResponseType:
        try:
            emails = body.get('emails_to_invite')

            trip_id = str(uuid.uuid4())
            trip_infos = {**body, 'id': trip_id}

            self.__trips_repository.create_trip(trip_infos)

            if emails:
                for email in emails:
                    self.__emails_repository.registry_email({
                        'email': email,
                        'trip_id': trip_id,
                        'id': str(uuid.uuid4()),
                    })

            return {
                'body': {'id': trip_id},
                'status_code': 201
            }

        except Exception as e:
            return {
                'body': {
                    'error': 'Internal Server Error',
                    'message': str(e)
                },
                'status_code': 500
            }
