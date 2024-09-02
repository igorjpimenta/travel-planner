"""create_emails_to_invite_table

Revision ID: cd86c1d28dfa
Revises: 591f3543381e
Create Date: 2024-09-02 13:44:36.207870

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = 'cd86c1d28dfa'
down_revision: Union[str, None] = '591f3543381e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('591f3543381e',)


def upgrade() -> None:
    op.create_table(
        'emails_to_invite',
        sa.Column('id', sa.TEXT(), nullable=False),
        sa.Column('trip_id', sa.TEXT(), nullable=False),
        sa.Column('email', sa.TEXT(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['trip_id'], ['trips.id'], 'fk_trip_id')
    )


def downgrade() -> None:
    op.drop_table('emails_to_invite')
