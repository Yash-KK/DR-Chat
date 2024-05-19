from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    testing,
    ServerViewSet
)

router = DefaultRouter()
router.register('api/server/select', ServerViewSet)

urlpatterns = [
    path('testing/', testing, name='testing')    
]
urlpatterns = router.urls
