from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException
from typing import List, Dict


class ParticipantFinder:
    def __init__(self, participants_repository, trips_repository) -> None:
        self.__participants_repository = participants_repository
        self.__trips_repository = trips_repository

    def find(self, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            participants = self\
                .__participants_repository\
                .find_participants_from_trip(trip_id)
            participants_list: List[Dict[str, str]] = []

            for item in participants:
                participants_list.append({
                    'id': item[0],
                    'name': item[1],
                    'email': item[3],
                    'is_confirmed': item[2],
                })

            return {
                'body': {'participants': participants_list},
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
