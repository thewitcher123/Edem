from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework.response import Response


def hello_world(request):
    response = JsonResponse({"data": "Hello World from Server Hubcore!"})

    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"

    return response


class HelloWorldViewSet(viewsets.ModelViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def retrieve(self, request, pk=None):
        return Response("Hello World from Server Hubcore!")

