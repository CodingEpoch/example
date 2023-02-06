# Generated by Django 4.1.3 on 2023-02-06 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0008_rename_title_feature_detail_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="SupportedSites",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("detail", models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name="pricingplan",
            name="bestFor",
            field=models.CharField(default="Tits", max_length=100),
        ),
        migrations.AddField(
            model_name="pricingplan",
            name="guarantee",
            field=models.CharField(default="Tits", max_length=100),
        ),
        migrations.AddField(
            model_name="pricingplan",
            name="supportedsites",
            field=models.ManyToManyField(
                default=1, related_name="supported_sites", to="api.supportedsites"
            ),
        ),
    ]
