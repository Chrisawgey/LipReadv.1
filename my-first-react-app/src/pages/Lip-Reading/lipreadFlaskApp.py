from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import os

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_data():
    try:
        # defines path from local machine (cloned github repo, on refresh)
        repo_path = r'C:\Users\kevin\OneDrive\Documents\GitHub\LipReadv.1\my-first-react-app'
        os.chdir(repo_path)

        # runs the python script given
        result = subprocess.run(['python', 'helloworld.py'], capture_output=True, text=True)
        output = result.stdout.strip()
        error = result.stderr.strip()
        data = {
            "message": output,
            "error": error,
            "returncode": result.returncode
        }
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5173)


