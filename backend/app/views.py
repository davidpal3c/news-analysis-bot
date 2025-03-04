from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import NewsQuery
from .serializers import NewsQuerySerializer


class NewsQueryCreateView(generics.ListCreateAPIView):
    queryset = NewsQuery.objects.all()
    serializer_class = NewsQuerySerializer

    def post(self, request, *args, **kwargs):
        print("Incoming data:", request.data)  # debugging
        serializer = NewsQuerySerializer(data=request.data)

        if serializer.is_valid():
            print("Serializer data: RECEIVED AND VALIDATED")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Serializer errors:", serializer.errors)  # debugging
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NewsQueryRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NewsQuery.objects.all()
    serializer_class = NewsQuerySerializer

    def delete(self, request, *args, **kwargs):
        print("Incoming data:", request.data)
        return self.destroy(request, *args, **kwargs)

