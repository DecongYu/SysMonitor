from django.contrib import admin
from .models import Site, Uptime, Update, Incident



class SiteAdmin(Site):
    fieldsets = (
        (None, {'fields': ('title', 'url')}),
    )

admin.site.register(SiteAdmin, Uptime, Update, Incident)