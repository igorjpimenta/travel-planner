import uuid
from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException, BadRequestException


class ParticipantCreator:
    def __init__(
        self,
        participants_repository,
        emails_to_invite_repository,
        trips_repository,
    ) -> None:
        self.__participants_repository = participants_repository
        self.__emails_to_invite_repository = emails_to_invite_repository
        self.__trips_repository = trips_repository

    def create(self, body, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            participant_id = str(uuid.uuid4())
            email_id = str(uuid.uuid4())

            email_infos = {
                'email': body.get('email'),
                'id': email_id,
                'trip_id': trip_id,
            }

            participant_infos = {
                'id': participant_id,
                'trip_id': trip_id,
                'email_to_invite_id': email_id,
                'name': body.get('name')
            }

            self.__emails_to_invite_repository.registry_email(
                email_infos
            )
            self.__participants_repository.registry_participant(
                participant_infos
            )

            return {
                'body': {'id': participant_id},
                'status_code': 201
            }

        except NotFoundException as e:
            return {
                'body': {
                    'error': 'Not Found',
                    'message': str(e)
                },
                'status_code': 404
            }

        except Exception as e:
            return {
                'body': {
                    'error': 'Internal Server Error',
                    'message': str(e)
                },
                'status_code': 500
            }
