from autoslug import AutoSlugField
from django.db import models
from django.utils.translation import ugettext_lazy as _

from framework.users.models import User


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    body = models.TextField(verbose_name=_("body"))
    creation_date = models.DateTimeField(_('creation_date'), auto_now_add=True)
    slug = AutoSlugField(populate_from='title')
    title = models.CharField(
        verbose_name=_("title"),
        max_length=250,
        unique=True,
        error_messages={
            'unique': _("A post with that title already exists."),
        },
    )

    class Meta:
        verbose_name = _('post')
        verbose_name_plural = _('posts')

    def __str__(self):
        return self.title
