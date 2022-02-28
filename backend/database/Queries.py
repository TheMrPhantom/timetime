from authenticator import TokenManager
import util
from datetime import datetime, timedelta
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import session
from sqlalchemy.sql import func
from database.Models import *

from typing import List
import constants


class Queries:
    def __init__(self, db):

        self.db: SQLAlchemy = db
        self.session: session.Session = self.db.session
        self.db.create_all()
        if self.session.query(Event).first() is None:
            self.create_dummy_data()

    def get_event_infos(self, event_URL):
        is_public_Link = True

        event: Event = self.session.query(
            Event).filter_by(public_url=event_URL).first()
        if event is None:
            event = self.session.query(
                Event).filter_by(secret_url=event_URL).first()
            is_public_Link = False
        if event is None:
            return None
        if not is_public_Link:
            return {
                "is_public_Link": is_public_Link,
                "id": event.id,
                "name": event.name,
                "place": event.place,
                "informations": event.informations,
                "owner_name": event.owner_name,
                "owner_mail": event.owner_mail,
                "optional_selection": event.optional_selection,
                "max_Participants": event.max_Participants,
                "only_one_option": event.only_one_option,
                "secret_poll": event.secret_poll,
                "deadline": event.deadline,
                "send_result": event.send_result,
            }
        else:
            return {
                "is_public_Link": is_public_Link,
                "id": event.id,
                "name": event.name,
                "place": event.place,
                "informations": event.informations,
                "owner_name": event.owner_name,
                "optional_selection": event.optional_selection,
                "max_Participants": event.max_Participants,
                "only_one_option": event.only_one_option,
                "secret_poll": event.secret_poll,
                "deadline": event.deadline,
                "send_result": event.send_result,
            }

    def create_dummy_data(self) -> None:
        for i in range(5000):
            print(f"Inserting {i}/{5000}")
            event = Event(name=f"Event {i}", place=f"Am Ort {i}", informations=f"Informationen {i}",
                          secret_url=f"secret{i}", public_url=f"public{i}",
                          owner_name=f"tom{i}", owner_mail=f"tom{i}@la.de", optional_selection=True,
                          max_Participants=4, only_one_option=False, secret_poll=False, send_result=False)
            self.session.add(event)
            self.session.commit()

            event_id = event.id
            day1 = EventDay(event_id=event_id,
                            date=datetime.now()+timedelta(days=i))
            day2 = EventDay(event_id=event_id,
                            date=datetime.now()+timedelta(days=i+1))

            self.session.add(day1)
            self.session.add(day2)
            self.session.commit()

            event_day_id1 = day1.id
            event_day_id2 = day2.id
            time1 = EventTime(event_day_id=event_day_id1, start=datetime.now(
            )+timedelta(hours=i), end=datetime.now()+timedelta(hours=i+1))
            time2 = EventTime(event_day_id=event_day_id1, start=datetime.now(
            )+timedelta(hours=i+2), end=datetime.now()+timedelta(hours=i+3))
            time3 = EventTime(event_day_id=event_day_id2, start=datetime.now(
            )+timedelta(hours=i+4), end=datetime.now()+timedelta(hours=i+5))
            time4 = EventTime(event_day_id=event_day_id2, start=datetime.now(
            )+timedelta(hours=i+6), end=datetime.now()+timedelta(hours=i+7))

            self.session.add(time1)
            self.session.add(time2)
            self.session.add(time3)
            self.session.add(time4)
            self.session.commit()
