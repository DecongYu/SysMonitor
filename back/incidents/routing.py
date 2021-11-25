from django.urls import path
from incidents import consumers

websocket_urlpatterns = [
    path('ws/', consumers.UpdateConsumer.as_asgi())
]