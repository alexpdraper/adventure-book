---
layout: default
title: NPCs
---

# NPCs

{% assign npcs = site.npcs %}

{% for npc in npcs %}
- [{{npc.title}}]({{npc.url}})
{% endfor %}
