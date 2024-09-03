from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException, BadRequestException


class ParticipantConfirmer:
    def __init__(self, participants_repository, trips_repository) -> None:
        self.__participants_repository = participants_repository
        self.__trips_repository = trips_repository

    def confirm(self, trip_id, participant_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            participants = self\
                .__participants_repository\
                .find_participants_from_trip(trip_id)

            participants_ids = list(map(lambda item: item[0], participants))

            if participant_id not in participants_ids:
                raise NotFoundException(
                    "The participant doesn't belong to this trip "
                    "or doesn't exist"
                )

            participant = participants[participants_ids.index(participant_id)]

            if participant[2] != 1:
                self\
                    .__participants_repository\
                    .update_participant_confirmation(participant_id)

            else:
                raise BadRequestException('Participant already confirmed')

            return {
                'body': None,
                'status_code': 204
            }

        except NotFoundException as e:
            return {
                'body': {
                    'error': 'Not Found',
                    'message': str(e)
                },
                'status_code': 404
            }

        except BadRequestException as e:
            return {
                'body': {
                    'error': 'Bad Request',
                    'message': str(e)
                },
                'status_code': 400
            }

        except Exception as e:
            return {
                'body': {
                    'error': 'Internal Server Error',
                    'message': str(e)
                },
                'status_code': 500
            }
