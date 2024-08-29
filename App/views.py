from django.shortcuts import render

def about(request):
    return render(request,'about.html')
    
def home(request):
    return render(request,'home.html') 
    
def realisation(request):
    return render(request,'realisation.html') 
    
def service(request):
    return render(request,'service.html')
     
def contact(request):
    return render(request,'contact.html') 

# Create your views here.
