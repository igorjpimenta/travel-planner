"""rename_date_fields_from_trips_table

Revision ID: 5fd500d3929d
Revises: 6db156e1a323
Create Date: 2024-09-03 10:29:01.289376

"""
from typing import Sequence, Union

from alembic import op


revision: str = '5fd500d3929d'
down_revision: Union[str, None] = '6db156e1a323'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('591f3543381e',)


def upgrade() -> None:
    op.alter_column('trips', 'start_date', new_column_name='starts_at')
    op.alter_column('trips', 'end_date', new_column_name='ends_at')


def downgrade() -> None:
    op.alter_column('trips', 'starts_at', new_column_name='start_date')
    op.alter_column('trips', 'ends_at', new_column_name='end_date')
