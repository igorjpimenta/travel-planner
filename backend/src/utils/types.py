from typing import Dict, TypedDict


class ResponseType(TypedDict):
    body: Dict[str, str]
    status_code: int
