from sqlite3 import Connection
from typing import Dict, List, Tuple


class ParticipantsRepository:
    def __init__(self, conn: Connection) -> None:
        self.__conn = conn

    def registry_participant(self, participant_infos: Dict[str, str]) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            'insert into participants\
                (id, trip_id, email_to_invite_id, name)\
            values\
                (?, ?, ?, ?);',
            (
                participant_infos['id'],
                participant_infos['trip_id'],
                participant_infos['email_to_invite_id'],
                participant_infos['name'],
            ),
        )

        self.__conn.commit()

    def find_participants_from_trip(self, trip_id: str) -> List[Tuple[str]]:
        cursor = self.__conn.cursor()
        cursor.execute(
            'select\
                p.id,\
                p.name,\
                p.is_confirmed,\
                e.email\
            from participants as p\
            left join emails_to_invite as e\
                on p.email_to_invite_id = e.id\
            where\
                p.trip_id = ?;',
            (trip_id,),
        )

        participants = cursor.fetchall()

        return participants

    def update_participant_confirmation(self, participant_id: str) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            'update participants\
                set\
                    is_confirmed = 1\
                where\
                    id = ?;',
            (participant_id,),
        )

        self.__conn.commit()
