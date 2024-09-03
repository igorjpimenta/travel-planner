import uuid
from src.utils.types import ResponseType


class LinkCreator:
    def __init__(self, links_repository) -> None:
        self.__links_repository = links_repository

    def create(self, body, trip_id) -> ResponseType:
        try:
            url, title = body['url'], body['title']
            links_infos = self.__links_repository.find_links_from_trip(trip_id)

            for item in links_infos:
                item_url, item_title = item[2], item[3]

                if url == item_url:
                    raise Exception(
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

        except Exception as e:
            return {
                'body': {
                    'error': 'Bad Request',
                    'message': str(e)
                },
                'status_code': 400
            }
