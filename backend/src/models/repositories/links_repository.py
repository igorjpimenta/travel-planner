from sqlite3 import Connection
from typing import Dict, List, Tuple


class LinksRepository:
    def __init__(self, conn: Connection) -> None:
        self.__conn = conn

    def registry_link(self, link_infos: Dict[str, str]) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            'insert into links\
                (id, trip_id, link)\
            values\
                (?, ?, ?);',
            (
                link_infos['id'],
                link_infos['trip_id'],
                link_infos['link'],
            ),
        )

        self.__conn.commit()

    def find_links_from_trip(self, trip_id: str) -> List[Tuple[str]]:
        cursor = self.__conn.cursor()
        cursor.execute(
            'select *\
            from links\
            where\
                trip_id = ?;',
            (trip_id,),
        )

        links = cursor.fetchall()

        return links
