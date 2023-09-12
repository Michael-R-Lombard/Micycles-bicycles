"""added sizes table and column for bike

Revision ID: dfcf4c987b25
Revises: 
Create Date: 2023-09-11 21:50:51.322208

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dfcf4c987b25'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('sizes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('size', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bicycles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('handlebar_size', sa.Integer(), nullable=True),
    sa.Column('frame_size', sa.Integer(), nullable=True),
    sa.Column('wheel_size', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['frame_size'], ['sizes.id'], name=op.f('fk_bicycles_frame_size_sizes')),
    sa.ForeignKeyConstraint(['handlebar_size'], ['sizes.id'], name=op.f('fk_bicycles_handlebar_size_sizes')),
    sa.ForeignKeyConstraint(['wheel_size'], ['sizes.id'], name=op.f('fk_bicycles_wheel_size_sizes')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bicycles')
    op.drop_table('users')
    op.drop_table('sizes')
    # ### end Alembic commands ###
