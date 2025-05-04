from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'username', 'email', 'first_name', 'last_name', 
                'password1', 'password2', 
                'city', 'state', 'address', 'phone', 
                'is_staff', 'is_active'
            ),
        }),
    )

    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {
            'fields': ('city', 'state', 'address', 'phone')
        }),
    )

    list_display = ('username', 'email', 'first_name', 'last_name', 'phone', 'city', 'state')

admin.site.register(CustomUser, CustomUserAdmin)
