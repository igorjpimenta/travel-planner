from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException
from typing import List, Dict


class LinkFinder:
    def __init__(self, links_repository, trips_repository) -> None:
        self.__links_repository = links_repository
        self.__trips_repository = trips_repository

    def find(self, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            links = self.__links_repository.find_links_from_trip(trip_id)
            links_list: List[Dict[str, str]] = []

            for item in links:
                links_list.append({
                    'id': item[0],
                    'url': item[2],
                    'title': item[3],
                })

            return {
                'body': {'links': links_list},
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
