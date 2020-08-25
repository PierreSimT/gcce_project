from typing import Optional
from fastapi import FastAPI, File, UploadFile

import pandas as pd

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/api/post/columns")
async def get_columns(file: UploadFile = File(...)):
    df = pd.read_excel(file.file)
    columns = df.columns.tolist()
    return {"filename": file.filename, "values": columns}

@app.post("/api/post/column/{column_name}")
async def get_values(column_name: str, file: UploadFile = File(...)):
    df = pd.read_excel(file.file)
    values = df[column_name].tolist()
    return {"filename": file.filename, "column": column_name, "values": values}