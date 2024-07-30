from django.urls import path
from .views import RootApiView, ContactView, CustomUserListView, CustomUserDetailView, CustomAuthToken

urlpatterns = [
    path('', RootApiView.as_view(), name='api-root'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('users/', CustomUserListView.as_view(), name='customuser-list'),
    path('users/<int:pk>/', CustomUserDetailView.as_view(), name='customuser-detail'),
    path('login/', CustomAuthToken.as_view(), name='api-login'),
]
