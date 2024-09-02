"""create_links_table

Revision ID: faf5d245258e
Revises: cd86c1d28dfa
Create Date: 2024-09-02 13:54:00.347510

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'faf5d245258e'
down_revision: Union[str, None] = 'cd86c1d28dfa'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('591f3543381e',)


def upgrade() -> None:
    op.create_table(
        'links',
        sa.Column('id', sa.TEXT(), nullable=False),
        sa.Column('trip_id', sa.TEXT(), nullable=False),
        sa.Column('link', sa.TEXT(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['trip_id'], ['trips.id'], 'fk_trip_id')
    )


def downgrade() -> None:
    op.drop_table('links')
