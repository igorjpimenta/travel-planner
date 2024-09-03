"""rename_link_field_from_links_table

Revision ID: 8c878344f1be
Revises: 5fd500d3929d
Create Date: 2024-09-03 13:18:03.407036

"""
from typing import Sequence, Union

from alembic import op


revision: str = '8c878344f1be'
down_revision: Union[str, None] = '5fd500d3929d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = ('faf5d245258e',)


def upgrade() -> None:
    op.alter_column('links', 'link', new_column_name='url')


def downgrade() -> None:
    op.alter_column('links', 'url', new_column_name='link')
