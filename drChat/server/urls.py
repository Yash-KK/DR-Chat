from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import testing, ServerViewSet, CategoryViewSet
from webchat.views import MessageViewSet

router = DefaultRouter()
router.register("api/server/select", ServerViewSet)
router.register("api/server/category", CategoryViewSet)
router.register("api/messages", MessageViewSet, basename="message")

urlpatterns = [path("testing/", testing, name="testing")]
urlpatterns = router.urls
