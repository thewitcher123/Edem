#  2019. Author: SergeyKons <https://github.com/SergeyKons>

from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _


# Create your models here.


class ProjectTag(models.Model):
    title = models.CharField(
        _('Project tag title'),
        unique=True,
        max_length=36
    )
    # TODO: Add color for futures frontend

    created_at = models.DateTimeField(default=timezone.now, editable=False)
    edited_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Project(models.Model):
    """
    Проект, это базовая сущность, в рамках которой существуют таски для запуска процессов, репозитории и контент
    прошедший через обработчики, например, скомпилированные релизы приложений. Проект может меняться любым образом
    с помощью процессов в рамках этого проекта или внешних. Можно перенести проект в другой раздел, поменять права,
    описания, удалить проект. Проект имеет ряд данных, например, название, теги, права доуступа. Всеми этими данными
    можно управлять с помощью соответствующих процессов. Визуальное представление страницы проекта и его функционал
    может меняться также с помощью процессов. Система по сути замкнутая, проекты могут создавать другие проекты,
    изменять любые данные внутри самой платформы.

    ReadMore: https://github.com/grandcore/Edem/blob/master/documentation/objects.md
    """
    title = models.CharField(
        _('Project title'),
        max_length=255
    )
    description = models.TextField(
        _('Project Description')
    )
    author = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        verbose_name=_('Project author'),
        null=True
    )
    contributors = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        verbose_name=_('Project contributors'),
        related_name='contributor_projects',
        blank=True,
    )
    tags = models.ManyToManyField(
        to='projects.ProjectTag',
        blank=True,
    )

    created_at = models.DateTimeField(default=timezone.now, editable=False)
    edited_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
