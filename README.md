# Naive Chat Demo

This project consists of two subprojects:

1. API server implemented in Python (using Apistar framework)
2. Web application implemented in JS (using Next.js framework based on React.js)

## API server

### Preparation

Install Python dependencies:

```
pip install apistar
```

### Usage

Run the API server using the following command (issue it from the `api-server` folder):

```
python app.py
```

http://127.0.0.1:5000/chat should return a full list of chat messages now.


## Web App

### Preparation

Install JS dependencies (issue the command from the `web-app` folder):

```
npm install
```

### Usage

Run the Web Application server (issue the command from the `web-app` folder):

```
npm run dev
```

http://127.0.0.1:3000 should display the chat interface.
