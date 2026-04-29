from sqlalchemy import Column,Integer,String,Text
from sqlalchemy.orm import declarative_base

Base=declarative_base()

class Interaction(Base):
    __tablename__='interactions'

    id=Column(Integer,primary_key=True)
    hcp_name=Column(String)
    interaction_type=Column(String)
    topics=Column(Text)
    sentiment=Column(String)
    followup=Column(Text)