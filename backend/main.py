from typing import Union
from fastapi import FastAPI



app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/api")
def read_api():
    return {"username": "Jimmy", "password": "feajflk"}


@app.get("/api/test1")
def read_api_child():
    return {"username": "John", "password": "askfej"}


@app.get("/admin")
def read_admin():
    return {"username": "Jay", "password": "ckefje"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
