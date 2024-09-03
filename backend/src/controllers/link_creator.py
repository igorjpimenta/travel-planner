import uuid
from src.utils.types import ResponseType
from src.utils.exceptions import NotFoundException, BadRequestException


class LinkCreator:
    def __init__(self, links_repository, trips_repository) -> None:
        self.__links_repository = links_repository
        self.__trips_repository = trips_repository

    def create(self, body, trip_id) -> ResponseType:
        try:
            trip = self.__trips_repository.find_trip_by_id(trip_id)

            if not trip:
                raise NotFoundException('No trip found with given trip id')

            url, title = body['url'], body['title']
            links_infos = self.__links_repository.find_links_from_trip(trip_id)

            for item in links_infos:
                item_url, item_title = item[2], item[3]

                if url == item_url:
                    raise BadRequestException(
                        "Link is already related to this trip as "
                        f"'{item_title}'"
                    )

            link_id = str(uuid.uuid4())
            link_infos = {
                'id': link_id,
                'trip_id': trip_id,
                'title': title,
                'url': url,
            }

            self.__links_repository.registry_link(link_infos)

            return {
                'body': {'id': link_id},
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
