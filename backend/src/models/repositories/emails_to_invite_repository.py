from sqlite3 import Connection
from typing import Dict, List, Tuple


class EmailsToInviteRepository:
    def __init__(self, conn: Connection) -> None:
        self.__conn = conn

    def registry_email(self, email_infos: Dict[str, str]) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            'insert into emails_to_invite\
                (id, trip_id, email)\
            values\
                (?, ?, ?);',
            (
                email_infos['id'],
                email_infos['trip_id'],
                email_infos['email'],
            ),
        )

        self.__conn.commit()

    def find_emails_from_trip(self, trip_id: str) -> List[Tuple[str]]:
        cursor = self.__conn.cursor()
        cursor.execute(
            'select *\
            from emails_to_invite\
            where\
                trip_id = ?;',
            (trip_id,),
        )

        emails = cursor.fetchall()

        return emails
