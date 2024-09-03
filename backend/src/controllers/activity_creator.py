import uuid
from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException


class ActivityCreator:
    def __init__(self, activities_repository, trips_repository) -> None:
        self.__activities_repository = activities_repository
        self.__trips_repository = trips_repository

    def create(self, body, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            activity_id = str(uuid.uuid4())

            activity_infos = {
                'id': activity_id,
                'trip_id': trip_id,
                'title': body.get('title'),
                'occurs_at': body.get('occurs_at'),
            }

            self.__activities_repository.registry_activity(activity_infos)

            return {
                'body': {'id': activity_id},
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
