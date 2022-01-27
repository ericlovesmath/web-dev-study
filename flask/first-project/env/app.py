from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<body style='background-color:#FFFFFF;'><p>Hello, World!</p></body>"

