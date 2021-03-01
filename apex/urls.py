from django.urls import path
from . import views

from django.conf.urls.static import static
#if settings.DEBUG:
        #urlpatterns += static(settings.MEDIA_URL,
                              #document_root=settings.MEDIA_ROOT)


urlpatterns = [
    path('', views.home, name='apex-home'),
    path('about/', views.about, name='apex-about'),
    path('pipe.jpg',views.home),
]
