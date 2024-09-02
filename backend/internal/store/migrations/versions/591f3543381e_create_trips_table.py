"""create_trips_table

Revision ID: 591f3543381e
Create Date: 2024-09-02 13:37:52.427986

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = '591f3543381e'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'trips',
        sa.Column('id', sa.TEXT(), nullable=False),
        sa.Column('destination', sa.TEXT(), nullable=False),
        sa.Column('start_date', sa.DATETIME(), nullable=True),
        sa.Column('end_date', sa.DATETIME(), nullable=True),
        sa.Column('owner_name', sa.TEXT(), nullable=False),
        sa.Column('owner_email', sa.TEXT(), nullable=False),
        sa.Column('status', sa.INTEGER(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade() -> None:
    op.drop_table('trips')
