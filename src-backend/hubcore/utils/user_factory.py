#  2019. Author: SergeyKons <https://github.com/SergeyKons>

import factory
from django.contrib.auth.models import User


class UserFactory(factory.DjangoModelFactory):
    """
    Fake data factory for django.contrib.auth.models.User
    ATTENTION!!! Must be rewrited if setttings.AUTH_USER_MODEL linked to cutom user model
    """
    class Meta:
        model = User

    username = factory.Faker('user_name')
    password = factory.PostGenerationMethodCall('set_password', 'Pa$$w0rd')
