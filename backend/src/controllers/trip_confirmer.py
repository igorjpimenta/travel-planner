from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException, BadRequestException


class TripConfirmer:
    def __init__(self, trips_repository) -> None:
        self.__trips_repository = trips_repository

    def confirm(self, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            if trip[6] != 1:
                self.__trips_repository.update_trip_status(trip_id)

            else:
                raise BadRequestException('Trip already confirmed')

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
