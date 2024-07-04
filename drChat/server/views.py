from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import exceptions

# MODELS
from .models import Server, Category

# SERIALIZER
from .serializer import ServerSerializer, CategorySerializer

# Create your views here.


class CategoryViewSet(viewsets.ViewSet):
    queryset = Category.objects.all()

    def list(self, request):
        serializer = CategorySerializer(self.queryset, many=True)
        return Response(serializer.data)


class ServerViewSet(viewsets.ViewSet):
    # permission_classes = [IsAuthenticated]

    queryset = Server.objects.all()

    def list(self, request):
        category = self.request.query_params.get("category")
        by_user = self.request.query_params.get("by_user") == "true"
        server_id = self.request.query_params.get("server_id")
        qty = self.request.query_params.get("qty")

        if (by_user or server_id) and not request.user.is_authenticated:
            raise exceptions.AuthenticationFailed()

        if category:
            self.queryset = self.queryset.filter(category__name=category)

        if by_user:
            user_id = request.user.id
            self.queryset = self.queryset.filter(member=user_id)

        if server_id:
            try:
                self.queryset = self.queryset.filter(id=server_id)
                if not self.queryset:
                    raise exceptions.ValidationError(
                        f"Server with Id: {server_id} not found."
                    )
            except ValueError as e:
                raise exceptions.ValidationError(e)

        if qty:
            self.queryset = self.queryset[: int(qty)]

        serializer = ServerSerializer(self.queryset, many=True)
        return Response(serializer.data)


# just a test
def testing(request):
    return HttpResponse("Testing")
