"""add_title_to_links_table

Revision ID: 6db156e1a323
Revises: faf5d245258e
Create Date: 2024-09-02 17:07:09.551587

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = '6db156e1a323'
down_revision: Union[str, None] = 'faf5d245258e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('faf5d245258e')


def upgrade() -> None:
    op.add_column(
        'links',
        sa.Column('title', sa.TEXT(), nullable=False),
    )


def downgrade() -> None:
    op.drop_column('links', 'title')
