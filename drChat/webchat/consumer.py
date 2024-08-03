from channels.generic.websocket import WebsocketConsumer

class MyConsumer(WebsocketConsumer):
    # groups = ["broadcast"]

    def connect(self):
        self.accept()


    def receive(self, text_data=None):
        print("////")
        print("Text Data: ",text_data)
        print("////")
        self.send(text_data="Hello world!")
        self.close()


    def disconnect(self, close_code):
        # Called when the socket closes
        pass