# Generated by Django 4.1.3 on 2023-02-06 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_rename_feature_pricingplan_features"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="extradetails",
            name="plan",
        ),
        migrations.AddField(
            model_name="pricingplan",
            name="extradetails",
            field=models.ManyToManyField(to="api.extradetails"),
        ),
    ]
