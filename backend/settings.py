from decouple import Config, RepositoryEnv
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent

DOTENV_PATH = str(BASE_DIR.parent / '.env')
config = Config(RepositoryEnv(DOTENV_PATH))

SQLITE_PATH = str(BASE_DIR.parent / 'storage.db')

SMTP_SERVER = str(config.get('SMTP_SERVER'))
SMTP_PORT = int(config.get('SMTP_PORT'))
SMTP_FROM_ADDR = str(config.get('SMTP_FROM_ADDR'))
SMTP_LOGIN = str(config.get('SMTP_LOGIN'))
SMTP_PASS = str(config.get('SMTP_PASS'))
