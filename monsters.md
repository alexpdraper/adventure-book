---
layout: default
title: Monsters
---

# Monsters

{% assign monsters = site.monsters %}

{% for monster in monsters %}
- [{{monster.title}}]({{monster.url}})
{% endfor %}
