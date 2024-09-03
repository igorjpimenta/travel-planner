"""create_activities_table

Revision ID: ea0b025b614f
Revises: b533203c3a98
Create Date: 2024-09-03 14:08:45.138384

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = 'ea0b025b614f'
down_revision: Union[str, None] = 'b533203c3a98'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('591f3543381e',)


def upgrade() -> None:
    op.create_table(
        'activities',
        sa.Column('id', sa.TEXT(), nullable=False),
        sa.Column('trip_id', sa.TEXT(), nullable=False),
        sa.Column('title', sa.TEXT(), nullable=False),
        sa.Column('occurs_at', sa.DATETIME()),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['trip_id'], ['trips.id'], 'fk_trip_id'),
    )


def downgrade() -> None:
    op.drop_table('activities')
