from decouple import Config, RepositoryEnv
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent

DOTENV_PATH = str(BASE_DIR.parent / '.env')
config = Config(RepositoryEnv(DOTENV_PATH))

SQLITE_PATH = str(BASE_DIR.parent / 'storage.db')
