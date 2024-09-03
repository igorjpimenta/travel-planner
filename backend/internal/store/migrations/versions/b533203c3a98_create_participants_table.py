"""create_participants_table

Revision ID: b533203c3a98
Revises: 8c878344f1be
Create Date: 2024-09-03 14:03:00.253167

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = 'b533203c3a98'
down_revision: Union[str, None] = '8c878344f1be'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('591f3543381e', 'cd86c1d28dfa')


def upgrade() -> None:
    op.create_table(
        'participants',
        sa.Column('id', sa.TEXT(), nullable=False),
        sa.Column('trip_id', sa.TEXT(), nullable=False),
        sa.Column('email_to_invite_id', sa.TEXT(), nullable=False),
        sa.Column('name', sa.TEXT(), nullable=False),
        sa.Column('is_confirmed', sa.INTEGER()),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['trip_id'], ['trips.id'], 'fk_trip_id'),
        sa.ForeignKeyConstraint(
            ['email_to_invite_id'],
            ['emails_to_invite.id'],
            'fk_email_to_invite_id'
        ),
    )


def downgrade() -> None:
    op.drop_table('participants')
