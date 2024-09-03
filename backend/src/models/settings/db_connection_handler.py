import sqlite3
from sqlite3 import Connection
from settings import SQLITE_PATH


class DbConnectionHandler:
    __conn: Connection
    __connection_string: str = SQLITE_PATH

    def connect(self) -> None:
        conn: Connection = sqlite3.connect(
            self.__connection_string,
            check_same_thread=False
        )
        self.__conn = conn

    def get_connection(self) -> Connection:
        return self.__conn


db_connection_handler = DbConnectionHandler()
