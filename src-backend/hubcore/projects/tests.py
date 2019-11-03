from django.test import TestCase

# Create your tests here.
from projects.factories import ProjectTagFactory, ProjectFactory
from projects.models import ProjectTag, Project


class ProjectTagTestCase(TestCase):
    def test_project_tag_creation(self):
        project_tag = ProjectTagFactory()
        self.assertTrue(isinstance(project_tag, ProjectTag))
        self.assertEqual(project_tag.title, project_tag.__str__())


class ProjectTestCase(TestCase):
    def test_project_creation(self):
        project = ProjectFactory()
        self.assertTrue(isinstance(project, Project))
        self.assertEqual(project.title, project.__str__())
