from django.contrib import admin
from incidents.models import Site, Uptime, Update, Incident


admin.site.register(Site)
admin.site.register(Uptime)
admin.site.register(Update)
admin.site.register(Incident)