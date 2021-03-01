from django.shortcuts import render
from .models import Post

#from django.http import HttpResponse

#posts = [
    #{
    #'M':'By offering solutions through ‘Cutting Edge’ technology; providing relevant ancillary products; offering efficient propositions that enable speed of execution; by developing employees and by being a responsible corporate in investing in the environment',
    #'V':'To offer sustainable solutions in steel and plastics; create value additions; driven by innovation; technology & efficiency for the construction and fabrication industry in Kenya and East Africa.',
    #}
#]


def home(request):
    return render(request, 'apex/home.html', {'title': 'Home'})

def about(request):
    posts = Post.objects.all()
    context = {
        'posts': posts
    }
    return render(request, 'apex/about.html', context)
