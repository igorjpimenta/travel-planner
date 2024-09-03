from typing import Dict, List, TypedDict, Optional, Union


class ResponseType(TypedDict):
    body: Optional[Dict[str, Union[str, List[Dict[str, str]]]]]
    status_code: int
