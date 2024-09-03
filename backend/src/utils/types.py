from typing import Dict, TypedDict, Optional


class ResponseType(TypedDict):
    body: Optional[Dict[str, str]]
    status_code: int
