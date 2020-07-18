from django.db import models
from django.utils.translation import ugettext_lazy as _

from framework.users.models import User


class Album(models.Model):
    creation_date = models.DateTimeField(_('creation_date'), auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="albums")
    title = models.CharField(verbose_name=_("title"), max_length=250)

    class Meta:
        verbose_name = _('album')
        verbose_name_plural = _('albums')

    def __str__(self):
        return self.title


class Photo(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name="photos")
    creation_date = models.DateTimeField(_('creation_date'), auto_now_add=True)
    title = models.CharField(verbose_name=_("title"), max_length=250)
    url = models.URLField(verbose_name=_("url"))
    thumbnail_url = models.URLField(verbose_name=_("thumbnail url"))

    class Meta:
        verbose_name = _('photo')
        verbose_name_plural = _('photos')

    def __str__(self):
        return self.title
