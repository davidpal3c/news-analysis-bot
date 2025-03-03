from django.urls import path
from .views import NewsQueryCreateView, NewsQueryRetrieveUpdateDeleteView

urlpatterns = [
    path('newsQuery/', NewsQueryCreateView.as_view(), name='newsQuery-create'),
    path('newsQuery/<int:pk>/', NewsQueryRetrieveUpdateDeleteView.as_view(), name='newsQuery-detail'),
]



