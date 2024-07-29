from django.urls import path
from .views import RootApiView, ContactView, CustomUserListView, CustomUserDetailView

urlpatterns = [
    path('', RootApiView.as_view(), name='api-root'),  # This will handle the root API endpoint
    path('contact/', ContactView.as_view(), name='contact'),
    path('users/', CustomUserListView.as_view(), name='customuser-list'),
    path('users/<int:pk>/', CustomUserDetailView.as_view(), name='customuser-detail'),
]
