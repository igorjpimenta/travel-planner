from sqlite3 import Connection
from typing import Dict, List, Tuple


class ActivitiesRepository:
    def __init__(self, conn: Connection) -> None:
        self.__conn = conn

    def registry_activity(self, activity_infos: Dict[str, str]) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            'insert into activities\
                (id, trip_id, title, occurs_at)\
            values\
                (?, ?, ?, ?);',
            (
                activity_infos['id'],
                activity_infos['trip_id'],
                activity_infos['title'],
                activity_infos['occurs_at'],
            ),
        )

        self.__conn.commit()

    def find_activities_from_trip(self, trip_id: str) -> List[Tuple[str]]:
        cursor = self.__conn.cursor()
        cursor.execute(
            'select\
                id,\
                title,\
                occurs_at\
            from activities\
            where\
                trip_id = ?;',
            (trip_id,),
        )

        activities = cursor.fetchall()

        return activities
