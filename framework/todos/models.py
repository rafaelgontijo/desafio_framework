from django.db import models
from django.utils.translation import ugettext_lazy as _

from framework.users.models import User


class Todo(models.Model):
    creation_date = models.DateTimeField(_('creation_date'), auto_now_add=True)
    completed = models.BooleanField(_("completed"), default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="todos")
    title = models.CharField(verbose_name=_("title"), max_length=250)

    class Meta:
        verbose_name = _('todo')
        verbose_name_plural = _('todos')

    def __str__(self):
        return self.title
