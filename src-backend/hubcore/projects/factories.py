#  2019. Author: SergeyKons <https://github.com/SergeyKons>
import factory
import factory.django

from projects.models import ProjectTag, Project
from utils.user_factory import UserFactory


class ProjectTagFactory(factory.DjangoModelFactory):
    """
    Fake data factory for ProjectTag model
    """
    class Meta:
        model = ProjectTag

    title = factory.Faker('word')


class ProjectFactory(factory.DjangoModelFactory):
    """
    Fake data factory for Project model
    """
    class Meta:
        model = Project

    title = factory.Faker('sentence', nb_words=3)
    description = factory.Faker('text', max_nb_chars=200)
    author = factory.SubFactory(UserFactory)

    # Many to many relation
    # See: https://factoryboy.readthedocs.io/en/latest/recipes.html#simple-many-to-many-relationship
    @factory.post_generation
    def contributors(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of groups were passed in, use them
            for contributor in extracted:
                self.contributors.add(contributor)

    # Many to many relation
    # See: https://factoryboy.readthedocs.io/en/latest/recipes.html#simple-many-to-many-relationship
    @factory.post_generation
    def tags(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of groups were passed in, use them
            for tag in extracted:
                self.tags.add(tag)
