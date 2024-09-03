from src.utils.types import ResponseType
from typing import List, Dict


class LinkFinder:
    def __init__(self, links_repository) -> None:
        self.__links_repository = links_repository

    def find(self, trip_id) -> ResponseType:
        try:
            links = self.__links_repository.find_links_from_trip(trip_id)

            if not links:
                raise Exception('No links found with given trip id')

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

        except Exception as e:
            return {
                'body': {
                    'error': 'Bad Request',
                    'message': str(e)
                },
                'status_code': 400
            }
