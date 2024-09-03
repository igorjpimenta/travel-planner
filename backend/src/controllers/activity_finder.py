from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException
from typing import List, Dict


class ActivityFinder:
    def __init__(self, activities_repository, trips_repository) -> None:
        self.__activities_repository = activities_repository
        self.__trips_repository = trips_repository

    def find(self, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            activities = self\
                .__activities_repository\
                .find_activities_from_trip(trip_id)
            activities_list: List[Dict[str, str]] = []

            for item in activities:
                activities_list.append({
                    'id': item[0],
                    'title': item[1],
                    'occurs_at': item[2],
                })

            return {
                'body': {'activities': activities_list},
                'status_code': 200
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
