from apistar import App, Route, types, validators


chat_messages = []

def get_chat():
    """
    Получить список сообщений.
    """
    return chat_messages


class ChatMessage(types.Type):
    username = validators.String()
    message = validators.String()

def add_new_message(chat_message: ChatMessage):
    """
    Добавить сообщение.
    """
    chat_messages.append(chat_message)
    return {'status': 'OK'}


routes = [
    Route('/chat', method='GET', handler=get_chat),
    Route('/chat', method='POST', handler=add_new_message),
]


class CORSMiddleware(App):
    """Add Cross-origin resource sharing headers to every request."""

    def __init__(self, origin="*", **kwargs):
        super().__init__(**kwargs)
        self.origin = origin

    def __call__(self, environ, start_response):
        def add_cors_headers(status, headers, exc_info=None):
            headers.append(("Access-Control-Allow-Origin", self.origin))
            headers.append(
                ("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization")
            )
            headers.append(("Access-Control-Allow-Credentials", "true"))
            headers.append(("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"))

            return start_response(status, headers)

        if environ.get("REQUEST_METHOD") == "OPTIONS":
            add_cors_headers("200 OK", [("Content-Type", "text/plain")])
            return [b"200 OK"]

        return super().__call__(environ, add_cors_headers)


app = CORSMiddleware(origin="*", routes=routes)

app.serve(host='0.0.0.0', port=5000, debug=True)
